/* ============================================================
   lc3tee2.js — sidebar toggle/resize and tab switching
   ============================================================ */

(function () {
    'use strict';

    /* ----------------------------------------------------------
       Constants
       ---------------------------------------------------------- */
    const STORAGE_COLLAPSED      = 'lc3tee2-sidebar-collapsed';
    const STORAGE_WIDTH           = 'lc3tee2-sidebar-width';
    const STORAGE_FILES           = 'lc3tee2-file-list';
    const STORAGE_TABS            = 'lc3tee2-open-tabs';
    const STORAGE_ACTIVE_TAB      = 'lc3tee2-active-tab';
    const FILE_TYPES              = ['asm', 'lst', 'sym', 'bin', 'hex'];
    function contentKey(type, name) { return 'lc3tee2-file-content-' + type + ':' + name; }
    function stateKey(name)         { return 'lc3tee2-file-state:' + name; }
    const SIDEBAR_MIN_W     = 120;   // px
    const SIDEBAR_MAX_W     = 600;   // px
    const SIDEBAR_DEFAULT_W = 260;   // px

    /* ----------------------------------------------------------
       Element refs
       ---------------------------------------------------------- */
    const app     = document.getElementById('lc3tee-app');
    const sidebar = document.getElementById('lc3tee-sidebar');
    const resizer = document.getElementById('lc3tee-sidebar-resizer');
    const toggle  = document.getElementById('lc3tee-sidebar-toggle');

    /* ----------------------------------------------------------
       Sidebar width (CSS variable)
       ---------------------------------------------------------- */
    function getSavedWidth() {
        const saved = parseInt(localStorage.getItem(STORAGE_WIDTH), 10);
        return (saved && saved >= SIDEBAR_MIN_W && saved <= SIDEBAR_MAX_W)
            ? saved
            : SIDEBAR_DEFAULT_W;
    }

    function setSidebarWidth(px) {
        const clamped = Math.max(SIDEBAR_MIN_W, Math.min(SIDEBAR_MAX_W, px));
        app.style.setProperty('--lc3tee-sidebar-w', clamped + 'px');
        localStorage.setItem(STORAGE_WIDTH, clamped);
    }

    /* ----------------------------------------------------------
       Sidebar collapse / expand
       ---------------------------------------------------------- */
    function isCollapsed() {
        return app.classList.contains('sidebar-collapsed');
    }

    function collapseSidebar() {
        app.classList.add('sidebar-collapsed');
        localStorage.setItem(STORAGE_COLLAPSED, '1');
    }

    function expandSidebar() {
        app.classList.remove('sidebar-collapsed');
        localStorage.setItem(STORAGE_COLLAPSED, '0');
    }

    function toggleSidebar() {
        isCollapsed() ? expandSidebar() : collapseSidebar();
    }

    /* ----------------------------------------------------------
       Sidebar resize via drag
       ---------------------------------------------------------- */
    let resizing = false;
    let resizeStartX = 0;
    let resizeStartW = 0;

    function onResizerMouseDown(e) {
        if (isCollapsed()) return;
        resizing = true;
        resizeStartX = e.clientX;
        resizeStartW = sidebar.getBoundingClientRect().width;
        app.classList.add('sidebar-resizing');
        document.addEventListener('mousemove', onResizerMouseMove);
        document.addEventListener('mouseup',   onResizerMouseUp);
        e.preventDefault();
    }

    function onResizerMouseMove(e) {
        if (!resizing) return;
        const delta = e.clientX - resizeStartX;
        setSidebarWidth(resizeStartW + delta);
    }

    function onResizerMouseUp() {
        if (!resizing) return;
        resizing = false;
        app.classList.remove('sidebar-resizing');
        document.removeEventListener('mousemove', onResizerMouseMove);
        document.removeEventListener('mouseup',   onResizerMouseUp);
    }

    /* ----------------------------------------------------------
       File list management
       ---------------------------------------------------------- */

    function getFileList() {
        try {
            const raw = localStorage.getItem(STORAGE_FILES);
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    function saveFileList(files) {
        localStorage.setItem(STORAGE_FILES, JSON.stringify(files));
    }

    /* ----------------------------------------------------------
       Assembly state per file
       Possible values: 'assembled' | 'error' | (missing = not assembled)
       ---------------------------------------------------------- */
    function getFileState(name) {
        return localStorage.getItem(stateKey(name)) || 'not assembled';
    }

    function setFileState(name, state) {
        localStorage.setItem(stateKey(name), state);
    }

    function renderStatusTable() {
        const container = document.getElementById('lc3tee-status-table');
        if (!container) return;
        const files = getFileList();
        if (files.length === 0) {
            container.innerHTML = '';
            return;
        }
        const table = document.createElement('table');
        table.className = 'lc3tee-status-table';
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        ['File', 'Status'].forEach(function (text) {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        files.forEach(function (name) {
            const state = getFileState(name);
            const tr = document.createElement('tr');
            const tdName = document.createElement('td');
            tdName.textContent = name;
            tdName.className = 'lc3tee-status-name';
            const tdState = document.createElement('td');
            const badge = document.createElement('span');
            badge.textContent = state;
            badge.className = 'lc3tee-status-badge lc3tee-status-' + state.replace(/\s+/g, '-');
            tdState.appendChild(badge);
            tr.appendChild(tdName);
            tr.appendChild(tdState);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        container.innerHTML = '';
        container.appendChild(table);
    }

    function renderFileList(files) {
        const listEl = document.getElementById('lc3tee-file-list');
        if (!listEl) return;
        listEl.innerHTML = '';
        files.forEach(function (name) {
            const opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name;
            listEl.appendChild(opt);
        });
        renderStatusTable();
    }

    function loadFileList() {
        renderFileList(getFileList());
    }

    function addFile() {
        const name = window.prompt('Enter a file name:');
        if (!name || !name.trim()) return;
        const trimmed = name.trim();
        const files = getFileList();
        if (files.indexOf(trimmed) !== -1) {
            window.alert('"' + trimmed + '" is already in the list.');
            return;
        }
        if (files.length >= 10) {
            window.alert('File limit reached (10). Please remove some files before adding more.');
            return;
        }
        // Filter file names to only allow *.asm files.
        if (!/^[\w\-]+\.asm$/i.test(trimmed)) {
            window.alert('File must have .asm file extension.');
            return;
        }
        files.push(trimmed);
        saveFileList(files);
        renderFileList(files);
        openTabByName(trimmed);
    }

    function removeFile() {
        const listEl = document.getElementById('lc3tee-file-list');
        if (!listEl) return;
        const selected = Array.from(listEl.selectedOptions).map(function (o) { return o.value; });
        if (selected.length === 0) return;

        // Close any open tabs and clear saved content + state for the removed files
        selected.forEach(function (name) {
            closeTabByPanelId(fileNameToPanelId(name), true);
            FILE_TYPES.forEach(function (type) {
                localStorage.removeItem(contentKey(type, name));
            });
            localStorage.removeItem(stateKey(name));
        });

        const files = getFileList().filter(function (f) { return selected.indexOf(f) === -1; });
        saveFileList(files);
        renderFileList(files);
    }

    function fileNameToPanelId(name) {
        return 'file-' + name.replace(/[^a-zA-Z0-9_-]/g, '-');
    }

    /* ----------------------------------------------------------
       Close-tab confirmation dialog
       ---------------------------------------------------------- */
    function isTabDirty(name) {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        if (!tabsEl) return false;
        const btn = tabsEl.querySelector('.lc3tee-tab-btn[data-name="' + name + '"]');
        if (!btn) return false;
        const label = btn.querySelector('span:first-child');
        return label ? label.textContent.charAt(0) === '*' : false;
    }

    function showCloseDialog(name, onSaveAndClose, onDiscardAndClose) {
        const backdrop = document.getElementById('lc3tee-close-dialog');
        const msg      = document.getElementById('lc3tee-close-dialog-msg');
        const saveBtn  = document.getElementById('lc3tee-dialog-save');
        const discardBtn = document.getElementById('lc3tee-dialog-discard');
        const cancelBtn  = document.getElementById('lc3tee-dialog-cancel');
        if (!backdrop) return;

        msg.textContent = 'Save changes to \u201c' + name + '\u201d before closing?';
        backdrop.hidden = false;

        function cleanup() {
            backdrop.hidden = true;
            saveBtn.onclick    = null;
            discardBtn.onclick = null;
            cancelBtn.onclick  = null;
        }

        saveBtn.onclick    = function () { cleanup(); onSaveAndClose(); };
        discardBtn.onclick = function () { cleanup(); onDiscardAndClose(); };
        cancelBtn.onclick  = function () { cleanup(); };
    }

    function closeTabByPanelId(panelId, force) {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        const workEl = document.getElementById('lc3tee-work');
        if (!tabsEl || !workEl) return;
        const btn   = tabsEl.querySelector('.lc3tee-tab-btn[data-panel="' + panelId + '"]');
        if (!btn) return;
        const name = btn.dataset.name;

        if (!force && isTabDirty(name)) {
            showCloseDialog(
                name,
                function () { saveFileContent(name); doCloseTab(panelId); },           // Save & Close
                function () { markClean(name); doCloseTab(panelId); }                   // Discard & Close
            );
            return;
        }
        doCloseTab(panelId);
    }

    function doCloseTab(panelId) {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        const workEl = document.getElementById('lc3tee-work');
        if (!tabsEl || !workEl) return;
        const btn   = tabsEl.querySelector('.lc3tee-tab-btn[data-panel="' + panelId + '"]');
        const panel = workEl.querySelector('.lc3tee-panel#' + panelId);
        const wasActive = btn && btn.classList.contains('active');
        if (btn)   btn.remove();
        if (panel) panel.remove();
        if (wasActive) {
            const next = tabsEl.querySelector('.lc3tee-tab-btn');
            if (next) activateTab(next.dataset.panel);  // activateTab also saves
        } else {
            saveTabState();  // save when a non-active tab is closed
        }
    }

    function openTabByName(name) {
        const panelId = fileNameToPanelId(name);
        const tabsEl  = document.getElementById('lc3tee-tabs-scroll');
        const workEl  = document.getElementById('lc3tee-work');
        if (!tabsEl || !workEl) return;

        // If tab already exists, just activate it
        const existing = tabsEl.querySelector('.lc3tee-tab-btn[data-panel="' + panelId + '"]');
        if (existing) {
            activateTab(panelId);
            return;
        }

        // Create tab button with label + close button
        const btn = document.createElement('button');
        btn.className  = 'lc3tee-tab-btn';
        btn.dataset.panel = panelId;
        btn.dataset.name  = name;
        const labelSpan = document.createElement('span');
        labelSpan.textContent = name;
        const closeSpan = document.createElement('span');
        closeSpan.className = 'lc3tee-tab-close';
        closeSpan.textContent = '\u00d7';
        closeSpan.title = 'Close tab';
        btn.appendChild(labelSpan);
        btn.appendChild(closeSpan);
        tabsEl.appendChild(btn);

        // Create panel
        const panel = document.createElement('div');
        panel.className = 'lc3tee-panel';
        panel.id = panelId;

        // Create 5 labeled editor textareas (asm, lst, sym, bin, hex)
        FILE_TYPES.forEach(function (type) {
            const section = document.createElement('div');
            section.className = 'lc3tee-editor-section';
            const label = document.createElement('div');
            label.className = 'lc3tee-editor-section-label';
            label.textContent = type.toUpperCase();
            section.appendChild(label);
            const textarea = document.createElement('textarea');
            textarea.className = 'lc3tee-editor';
            textarea.dataset.type = type;
            textarea.setAttribute('spellcheck', 'false');
            textarea.setAttribute('autocomplete', 'off');
            textarea.setAttribute('autocorrect', 'off');
            textarea.setAttribute('autocapitalize', 'off');
            textarea.setAttribute('wrap', 'off');
            const savedContent = localStorage.getItem(contentKey(type, name));
            if (savedContent !== null) textarea.value = savedContent;
            if (type !== 'asm') {
                textarea.setAttribute('readonly', '');
                textarea.classList.add('lc3tee-editor-readonly');
            } else {
                textarea.addEventListener('input', function () { markDirty(name); });
                textarea.addEventListener('keydown', function (e) {
                    if (!e.altKey) return;
                    if (e.key === 'a' || e.key === 'A') { e.preventDefault(); assemble(); }
                    if (e.key === 's' || e.key === 'S') { e.preventDefault(); saveFileContent(name); }
                });
            }
            section.appendChild(textarea);
            panel.appendChild(section);
        });
        workEl.appendChild(panel);

        activateTab(panelId);
    }

    function openTabForFile() {
        const listEl = document.getElementById('lc3tee-file-list');
        if (!listEl) return;
        const selected = listEl.options[listEl.selectedIndex];
        if (!selected) return;
        openTabByName(selected.value);
    }

    function closeTabForFile() {
        const listEl = document.getElementById('lc3tee-file-list');
        if (!listEl) return;
        const selected = listEl.options[listEl.selectedIndex];
        if (!selected) return;
        closeTabByPanelId(fileNameToPanelId(selected.value));
    }

    function clearWorkspace() {
        if (!window.confirm('Clear workspace? All files and unsaved changes will be removed.')) return;

        // Force-close all open tabs
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        if (tabsEl) {
            Array.from(tabsEl.querySelectorAll('.lc3tee-tab-btn')).forEach(function (btn) {
                doCloseTab(btn.dataset.panel);
            });
        }

        // Remove file content + state from localStorage for every known file
        getFileList().forEach(function (name) {
            FILE_TYPES.forEach(function (type) {
                localStorage.removeItem(contentKey(type, name));
            });
            localStorage.removeItem(stateKey(name));
        });

        // Clear the file list and tab state from localStorage
        localStorage.removeItem(STORAGE_FILES);
        localStorage.removeItem(STORAGE_TABS);
        localStorage.removeItem(STORAGE_ACTIVE_TAB);

        // Re-render the now-empty file list
        renderFileList([]);
    }

    function simulate() {
        const overlay  = document.getElementById('lc3tee-sim-overlay');
        const body     = document.getElementById('lc3tee-sim-body');
        const closeBtn = document.getElementById('lc3tee-sim-close');
        if (!overlay || !body) return;

        // Only include files that have been successfully assembled
        body.innerHTML = '';
        const assembledFiles = getFileList().filter(function (name) {
            return getFileState(name) === 'assembled';
        });

        if (assembledFiles.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'lc3tee-sim-empty';
            empty.textContent = 'No assembled files found. Assemble a file successfully first.';
            body.appendChild(empty);
        } else {
            assembledFiles.forEach(function (name) {
                const workEl  = document.getElementById('lc3tee-work');
                const panelId = fileNameToPanelId(name);
                const panel   = workEl && workEl.querySelector('.lc3tee-panel#' + panelId);
                var lstContent = '';
                if (panel) {
                    const ta = panel.querySelector('.lc3tee-editor[data-type="lst"]');
                    if (ta) lstContent = ta.value;
                }
                if (!lstContent) lstContent = localStorage.getItem(contentKey('lst', name)) || '';

                const section = document.createElement('div');
                section.className = 'lc3tee-sim-file-section';

                const label = document.createElement('div');
                label.className = 'lc3tee-sim-file-label';
                label.textContent = name.replace(/\.asm$/i, '') + '.lst';
                section.appendChild(label);

                const textarea = document.createElement('textarea');
                textarea.className = 'lc3tee-sim-lst';
                textarea.setAttribute('readonly', '');
                textarea.setAttribute('spellcheck', 'false');
                textarea.setAttribute('wrap', 'off');
                textarea.value = lstContent;
                section.appendChild(textarea);
                body.appendChild(section);
            });
        }

        overlay.hidden = false;
        if (closeBtn) closeBtn.onclick = function () { overlay.hidden = true; };
    }

    function assemble() {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        const workEl = document.getElementById('lc3tee-work');
        if (!tabsEl || !workEl) return;
        const activeBtn = tabsEl.querySelector('.lc3tee-tab-btn.active');
        if (!activeBtn) {
            window.alert('No active tab. Open a file first.');
            return;
        }
        const name    = activeBtn.dataset.name;
        const panelId = activeBtn.dataset.panel;
        const panel   = workEl.querySelector('.lc3tee-panel#' + panelId);
        if (!panel) return;

        const asmTextarea = panel.querySelector('.lc3tee-editor[data-type="asm"]');
        const asmContent  = asmTextarea ? asmTextarea.value : '';

        ['lst', 'sym', 'bin', 'hex'].forEach(function (type) {
            const ta = panel.querySelector('.lc3tee-editor[data-type="' + type + '"]');
            if (!ta) return;
            ta.value = asmContent + 'Hi I appended to ' + type + '!';
        });

        // Save all tab content
        saveFileContent(name);

        // Determine and persist state
        const state = asmContent.indexOf('good') !== -1 ? 'assembled' : 'error';
        setFileState(name, state);
        renderStatusTable();
    }

    function initFileList() {
        const addBtn          = document.getElementById('lc3tee-add-file-btn');
        const removeBtn       = document.getElementById('lc3tee-remove-file-btn');
        const openTabBtn      = document.getElementById('lc3tee-open-tab-btn');
        const closeTabBtn     = document.getElementById('lc3tee-close-tab-btn');
        const saveBtn         = document.getElementById('lc3tee-save-btn');
        const saveAllBtn      = document.getElementById('lc3tee-save-all-btn');
        const clearBtn        = document.getElementById('lc3tee-clear-workspace-btn');
        const importBtn       = document.getElementById('lc3tee-import-file-btn');
        const exportAllBtn    = document.getElementById('lc3tee-export-all-btn');
        const importInput     = document.getElementById('lc3tee-import-input');
        const assembleBtn     = document.getElementById('lc3tee-assemble-btn');
        const simulateBtn     = document.getElementById('lc3tee-simulate-btn');
        const listEl          = document.getElementById('lc3tee-file-list');
        if (addBtn)      addBtn.addEventListener('click', addFile);
        if (removeBtn)   removeBtn.addEventListener('click', removeFile);
        if (openTabBtn)  openTabBtn.addEventListener('click', openTabForFile);
        if (closeTabBtn) closeTabBtn.addEventListener('click', closeTabForFile);
        if (saveBtn)     saveBtn.addEventListener('click', saveSelectedFile);
        if (saveAllBtn)  saveAllBtn.addEventListener('click', saveAllFiles);
        if (clearBtn)    clearBtn.addEventListener('click', clearWorkspace);
        if (assembleBtn) assembleBtn.addEventListener('click', assemble);
        if (simulateBtn) simulateBtn.addEventListener('click', simulate);
        if (importBtn)   importBtn.addEventListener('click', function () {
            if (importInput) { importInput.value = ''; importInput.click(); }
        });
        if (importInput) importInput.addEventListener('change', importFile);
        if (exportAllBtn) exportAllBtn.addEventListener('click', exportAll);
        if (listEl)      listEl.addEventListener('dblclick', openTabForFile);
        loadFileList();
    }

    /* ----------------------------------------------------------
       Import / Export
       ---------------------------------------------------------- */
    function importFile(e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        if (!/\.asm$/i.test(file.name)) {
            window.alert('Only .asm files can be imported.');
            return;
        }

        const trimmed = file.name;
        const files = getFileList();

        if (files.length >= 10) {
            window.alert('File limit reached (10). Please remove some files before importing.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (ev) {
            const content = ev.target.result;
            if (files.indexOf(trimmed) !== -1) {
                if (!window.confirm('"' + trimmed + '" is already in the list. Overwrite its content?')) return;
                // Overwrite content and re-open tab
                localStorage.setItem(contentKey('asm', trimmed), content);
                // If tab is open, refresh its asm textarea
                const panelId = fileNameToPanelId(trimmed);
                const workEl  = document.getElementById('lc3tee-work');
                const panel   = workEl && workEl.querySelector('.lc3tee-panel#' + panelId);
                const textarea = panel && panel.querySelector('.lc3tee-editor[data-type="asm"]');
                if (textarea) { textarea.value = content; markClean(trimmed); }
                return;
            }
            files.push(trimmed);
            saveFileList(files);
            renderFileList(files);
            localStorage.setItem(contentKey('asm', trimmed), content);
            openTabByName(trimmed);
        };
        reader.readAsText(file);
    }

    function exportAll() {
        const files = getFileList();
        if (files.length === 0) {
            window.alert('No files to export.');
            return;
        }

        var zip;
        try {
            zip = new JSZip();
        } catch (err) {
            window.alert('JSZip is not available. Cannot export.');
            return;
        }

        files.forEach(function (name) {
            // base name without extension, e.g. "lc3os" from "lc3os.asm"
            const base = name.replace(/\.asm$/i, '');
            const panelId = fileNameToPanelId(name);
            const workEl  = document.getElementById('lc3tee-work');
            const panel   = workEl && workEl.querySelector('.lc3tee-panel#' + panelId);
            FILE_TYPES.forEach(function (type) {
                var content = '';
                const textarea = panel && panel.querySelector('.lc3tee-editor[data-type="' + type + '"]');
                if (textarea) {
                    content = textarea.value;
                } else {
                    content = localStorage.getItem(contentKey(type, name)) || '';
                }
                // Only add the file if it has content (skip empty read-only output files)
                if (content) {
                    zip.file(base + '.' + type, content);
                }
            });
        });

        zip.generateAsync({ type: 'blob' }).then(function (blob) {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'workspace.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(a.href);
        });
    }

    /* ----------------------------------------------------------
       Dirty / clean indicators
       ---------------------------------------------------------- */
    function markDirty(name) {
        // Update tab label
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        if (tabsEl) {
            const btn = tabsEl.querySelector('.lc3tee-tab-btn[data-name="' + name + '"]');
            if (btn) {
                const label = btn.querySelector('span:first-child');
                if (label && label.textContent === name) label.textContent = '*' + name;
            }
        }
        // Update file list option
        const listEl = document.getElementById('lc3tee-file-list');
        if (listEl) {
            const opt = Array.from(listEl.options).find(function (o) { return o.value === name; });
            if (opt && opt.textContent === name) opt.textContent = '*' + name;
        }
    }

    function markClean(name) {
        // Update tab label
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        if (tabsEl) {
            const btn = tabsEl.querySelector('.lc3tee-tab-btn[data-name="' + name + '"]');
            if (btn) {
                const label = btn.querySelector('span:first-child');
                if (label) label.textContent = name;
            }
        }
        // Update file list option
        const listEl = document.getElementById('lc3tee-file-list');
        if (listEl) {
            const opt = Array.from(listEl.options).find(function (o) { return o.value === name; });
            if (opt) opt.textContent = name;
        }
    }

    /* ----------------------------------------------------------
       File content save / restore
       ---------------------------------------------------------- */
    /* ----------------------------------------------------------
       Toast notifications
       ---------------------------------------------------------- */
    let toastTimer = null;

    function showToast(message) {
        let toast = document.getElementById('lc3tee-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'lc3tee-toast';
            toast.className = 'lc3tee-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('lc3tee-toast-visible');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.classList.remove('lc3tee-toast-visible');
            toastTimer = null;
        }, 2000);
    }

    function saveFileContent(name) {
        const panelId = fileNameToPanelId(name);
        const workEl  = document.getElementById('lc3tee-work');
        if (!workEl) return;
        const panel   = workEl.querySelector('.lc3tee-panel#' + panelId);
        if (!panel) return;  // tab not open — nothing to save
        FILE_TYPES.forEach(function (type) {
            const textarea = panel.querySelector('.lc3tee-editor[data-type="' + type + '"]');
            if (textarea) localStorage.setItem(contentKey(type, name), textarea.value);
        });
        markClean(name);
        showToast(name + ' saved');
    }

    function saveSelectedFile() {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        if (!tabsEl) return;
        const activeBtn = tabsEl.querySelector('.lc3tee-tab-btn.active');
        if (!activeBtn) return;
        saveFileContent(activeBtn.dataset.name);
    }

    function saveAllFiles() {
        getFileList().forEach(saveFileContent);
    }

    /* ----------------------------------------------------------
       Tab state persistence
       ---------------------------------------------------------- */
    function saveTabState() {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        if (!tabsEl) return;
        const names = [];
        let activeName = '';
        tabsEl.querySelectorAll('.lc3tee-tab-btn').forEach(function (btn) {
            names.push(btn.dataset.name);
            if (btn.classList.contains('active')) activeName = btn.dataset.name;
        });
        localStorage.setItem(STORAGE_TABS, JSON.stringify(names));
        localStorage.setItem(STORAGE_ACTIVE_TAB, activeName);
    }

    function restoreTabState() {
        try {
            const names = JSON.parse(localStorage.getItem(STORAGE_TABS) || '[]');
            const activeName = localStorage.getItem(STORAGE_ACTIVE_TAB) || '';
            if (!Array.isArray(names) || names.length === 0) return;
            // Only restore tabs for files that are still in the file list
            const knownFiles = getFileList();
            names.forEach(function (name) {
                if (knownFiles.indexOf(name) !== -1) openTabByName(name);
            });
            // Re-activate the previously active tab
            if (activeName) {
                const panelId = fileNameToPanelId(activeName);
                const tabsEl = document.getElementById('lc3tee-tabs-scroll');
                if (tabsEl && tabsEl.querySelector('.lc3tee-tab-btn[data-panel="' + panelId + '"]')) {
                    activateTab(panelId);
                }
            }
        } catch (e) { /* ignore */ }
    }

    /* ----------------------------------------------------------
       Tab switching
       Looks for .lc3tee-tab-btn[data-panel="<id>"] in lc3tee-tabs
       and .lc3tee-panel[id="<id>"] in lc3tee-work.
       ---------------------------------------------------------- */
    function activateTab(panelId) {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        const workEl = document.getElementById('lc3tee-work');
        if (!tabsEl || !workEl) return;

        tabsEl.querySelectorAll('.lc3tee-tab-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.panel === panelId);
        });
        workEl.querySelectorAll('.lc3tee-panel').forEach(function (panel) {
            panel.classList.toggle('active', panel.id === panelId);
        });
        saveTabState();
    }

    function initTabs() {
        const tabsEl = document.getElementById('lc3tee-tabs-scroll');
        if (!tabsEl) return;

        tabsEl.addEventListener('click', function (e) {
            // Close button inside tab
            if (e.target.closest('.lc3tee-tab-close')) {
                const btn = e.target.closest('.lc3tee-tab-btn');
                if (btn) closeTabByPanelId(btn.dataset.panel);
                return;
            }
            const btn = e.target.closest('.lc3tee-tab-btn');
            if (!btn) return;
            activateTab(btn.dataset.panel);
        });

        // Activate the first tab by default
        const first = tabsEl.querySelector('.lc3tee-tab-btn');
        if (first) activateTab(first.dataset.panel);
    }

    /* ----------------------------------------------------------
       Init
       ---------------------------------------------------------- */
    function init() {
        // Restore sidebar width
        setSidebarWidth(getSavedWidth());

        // Restore collapsed state
        if (localStorage.getItem(STORAGE_COLLAPSED) === '1') {
            app.classList.add('sidebar-collapsed');
        }

        // Wire up toggle button
        if (toggle) toggle.addEventListener('click', toggleSidebar);

        // Wire up resize handle
        if (resizer) resizer.addEventListener('mousedown', onResizerMouseDown);

        // Wire up tabs
        initTabs();

        // Init file list
        initFileList();

        // Restore open tabs from previous session
        restoreTabState();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

}());
