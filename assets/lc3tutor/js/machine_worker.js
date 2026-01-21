(function () {
    'use strict';

    // External memory index.
    var ExtMemIndex;
    (function (ExtMemIndex) {
        ExtMemIndex[ExtMemIndex["R0"] = 0] = "R0";
        ExtMemIndex[ExtMemIndex["R1"] = 1] = "R1";
        ExtMemIndex[ExtMemIndex["R2"] = 2] = "R2";
        ExtMemIndex[ExtMemIndex["R3"] = 3] = "R3";
        ExtMemIndex[ExtMemIndex["R4"] = 4] = "R4";
        ExtMemIndex[ExtMemIndex["R5"] = 5] = "R5";
        ExtMemIndex[ExtMemIndex["R6"] = 6] = "R6";
        ExtMemIndex[ExtMemIndex["R7"] = 7] = "R7";
        ExtMemIndex[ExtMemIndex["DDR"] = 8] = "DDR";
        ExtMemIndex[ExtMemIndex["DSR"] = 9] = "DSR";
        ExtMemIndex[ExtMemIndex["MCR"] = 10] = "MCR";
        ExtMemIndex[ExtMemIndex["BEN"] = 11] = "BEN";
        ExtMemIndex[ExtMemIndex["IR"] = 12] = "IR";
        ExtMemIndex[ExtMemIndex["Priv"] = 13] = "Priv";
        ExtMemIndex[ExtMemIndex["Priority"] = 14] = "Priority";
        ExtMemIndex[ExtMemIndex["CC"] = 15] = "CC";
        ExtMemIndex[ExtMemIndex["MAR"] = 16] = "MAR";
        ExtMemIndex[ExtMemIndex["PC"] = 17] = "PC";
        ExtMemIndex[ExtMemIndex["ACV"] = 18] = "ACV";
        ExtMemIndex[ExtMemIndex["Table"] = 19] = "Table";
        ExtMemIndex[ExtMemIndex["Vector"] = 20] = "Vector";
        ExtMemIndex[ExtMemIndex["MDR"] = 21] = "MDR";
        ExtMemIndex[ExtMemIndex["INT"] = 22] = "INT";
        ExtMemIndex[ExtMemIndex["Saved_SSP"] = 23] = "Saved_SSP";
        ExtMemIndex[ExtMemIndex["Saved_USP"] = 24] = "Saved_USP";
        ExtMemIndex[ExtMemIndex["INTV"] = 25] = "INTV";
        ExtMemIndex[ExtMemIndex["INTP"] = 26] = "INTP";
        ExtMemIndex[ExtMemIndex["StartType"] = 27] = "StartType";
    })(ExtMemIndex || (ExtMemIndex = {}));
    var MemMapIO;
    (function (MemMapIO) {
        MemMapIO[MemMapIO["KBSR"] = 65024] = "KBSR";
        MemMapIO[MemMapIO["KBDR"] = 65026] = "KBDR";
        MemMapIO[MemMapIO["DSR"] = 65028] = "DSR";
        MemMapIO[MemMapIO["DDR"] = 65030] = "DDR";
        MemMapIO[MemMapIO["PSR"] = 65532] = "PSR";
        MemMapIO[MemMapIO["MCR"] = 65534] = "MCR";
    })(MemMapIO || (MemMapIO = {}));
    class Memory {
        // 65636 16b words, last 100 words for registers and other data.
        // First 65535 words are for LC3 Memory.
        static BYTE_SIZE = 140000; // 65636 16b words.
        static WORD_SIZE = 70000;
        static EXTERNAL_START = 65540;
        static CLOCK_ENABLE_MASK = 0x8000;
        static DISPLAY_READY_MASK = 0x8000;
        static DISPLAY_DATA_MASK = 0x00FF;
        _sharedBuffer;
        _sharedArray;
        constructor(buffer) {
            this._sharedBuffer = buffer;
            this._sharedArray = new Uint16Array(buffer);
            this.DSR = 0x8000;
        }
        get sharedMemory() {
            return this._sharedBuffer;
        }
        get MachineEnabled() {
            return (this.MCR & Memory.CLOCK_ENABLE_MASK) !== 0;
        }
        get ProcessDisplay() {
            return (this.DSR & Memory.DISPLAY_READY_MASK) === 0;
        }
        // ProcessDisplay -> if bit is zero, which is set by a write to DDR.
        // SetDisplayReady -> set msb to one.
        get DisplayData() {
            this.DSR &= -32769;
            return this.DDR & Memory.DISPLAY_DATA_MASK;
        }
        get R0() { return this.ReadExternal(ExtMemIndex.R0); }
        set R0(value) { this.WriteExternal(ExtMemIndex.R0, value); }
        get R1() { return this.ReadExternal(ExtMemIndex.R1); }
        set R1(value) { this.WriteExternal(ExtMemIndex.R1, value); }
        get R2() { return this.ReadExternal(ExtMemIndex.R2); }
        set R2(value) { this.WriteExternal(ExtMemIndex.R2, value); }
        get R3() { return this.ReadExternal(ExtMemIndex.R3); }
        set R3(value) { this.WriteExternal(ExtMemIndex.R3, value); }
        get R4() { return this.ReadExternal(ExtMemIndex.R4); }
        set R4(value) { this.WriteExternal(ExtMemIndex.R4, value); }
        get R5() { return this.ReadExternal(ExtMemIndex.R5); }
        set R5(value) { this.WriteExternal(ExtMemIndex.R5, value); }
        get R6() { return this.ReadExternal(ExtMemIndex.R6); }
        set R6(value) { this.WriteExternal(ExtMemIndex.R6, value); }
        get R7() { return this.ReadExternal(ExtMemIndex.R7); }
        set R7(value) { this.WriteExternal(ExtMemIndex.R7, value); }
        get DDR() { return this.Read(MemMapIO.DDR); }
        set DDR(value) { this.Write(MemMapIO.DDR, value); }
        get DSR() { return this.Read(MemMapIO.DSR); }
        set DSR(value) { this.Write(MemMapIO.DSR, value); }
        get MCR() { return this.Read(MemMapIO.MCR); }
        set MCR(value) { this.Write(MemMapIO.MCR, value); }
        get BEN() { return this.ReadExternal(ExtMemIndex.BEN); }
        set BEN(value) { this.WriteExternal(ExtMemIndex.BEN, value); }
        get IR() { return this.ReadExternal(ExtMemIndex.IR); }
        set IR(value) { this.WriteExternal(ExtMemIndex.IR, value); }
        get Priv() { return this.ReadExternal(ExtMemIndex.Priv); }
        set Priv(value) { this.WriteExternal(ExtMemIndex.Priv, value); }
        get Priority() { return this.ReadExternal(ExtMemIndex.Priority); }
        set Priority(value) { this.WriteExternal(ExtMemIndex.Priority, value); }
        get CC() { return this.ReadExternal(ExtMemIndex.CC); }
        set CC(value) { this.WriteExternal(ExtMemIndex.CC, value); }
        get MAR() { return this.ReadExternal(ExtMemIndex.MAR); }
        set MAR(value) { this.WriteExternal(ExtMemIndex.MAR, value); }
        get PC() { return this.ReadExternal(ExtMemIndex.PC); }
        set PC(value) { this.WriteExternal(ExtMemIndex.PC, value); }
        get ACV() { return this.ReadExternal(ExtMemIndex.ACV); }
        set ACV(value) { this.WriteExternal(ExtMemIndex.ACV, value); }
        get Table() { return this.ReadExternal(ExtMemIndex.Table); }
        set Table(value) { this.WriteExternal(ExtMemIndex.Table, value); }
        get Vector() { return this.ReadExternal(ExtMemIndex.Vector); }
        set Vector(value) { this.WriteExternal(ExtMemIndex.Vector, value); }
        get MDR() { return this.ReadExternal(ExtMemIndex.MDR); }
        set MDR(value) { this.WriteExternal(ExtMemIndex.MDR, value); }
        get INT() { return this.ReadExternal(ExtMemIndex.INT); }
        set INT(value) { this.WriteExternal(ExtMemIndex.INT, value); }
        get Saved_SSP() { return this.ReadExternal(ExtMemIndex.Saved_SSP); }
        set Saved_SSP(value) { this.WriteExternal(ExtMemIndex.Saved_SSP, value); }
        get Saved_USP() { return this.ReadExternal(ExtMemIndex.Saved_USP); }
        set Saved_USP(value) { this.WriteExternal(ExtMemIndex.Saved_USP, value); }
        get INTV() { return this.ReadExternal(ExtMemIndex.INTV); }
        set INTV(value) { this.WriteExternal(ExtMemIndex.INTV, value); }
        get INTP() { return this.ReadExternal(ExtMemIndex.INTP); }
        set INTP(value) { this.WriteExternal(ExtMemIndex.INTP, value); }
        get StartType() { return this.ReadExternal(ExtMemIndex.StartType); }
        set StartType(value) { this.WriteExternal(ExtMemIndex.StartType, value); }
        get PSR() {
            //return this.ReadExternal(ExtMemIndex.IR)
            let psr = 0x0;
            psr |= (this.Priv & 0x1) << 15;
            psr |= (this.Priority & 0x7) << 8;
            psr |= (this.CC & 0x7);
            return psr & 0xFFFF;
        }
        set PSR(value) {
            //this.WriteExternal(ExtMemIndex.IR, value)
            const psr = value & 0xFFFF; // keep 16-bit
            this.Priv = (psr >> 15) & 0x1;
            this.Priority = (psr >> 8) & 0x7;
            this.CC = psr & 0x7;
        }
        Read(loc) {
            if (loc >= Memory.WORD_SIZE) {
                throw new Error(`Attempted to read from outside of memory from location ${loc}`);
            }
            let result = 0x0;
            result = Atomics.load(this._sharedArray, loc);
            return result;
        }
        ReadExternal(loc) {
            return this.Read(loc + Memory.EXTERNAL_START);
        }
        Write(loc, val) {
            if (loc >= Memory.WORD_SIZE) {
                throw new Error(`Attempted to write to outside of memory to location ${loc}`);
            }
            if (loc === MemMapIO.DDR) {
                let valDSR = this.DSR & 0x7FFF;
                Atomics.store(this._sharedArray, MemMapIO.DSR, valDSR);
            }
            Atomics.store(this._sharedArray, loc, val);
        }
        WriteWithNoSets(loc, val) {
            if (loc >= Memory.WORD_SIZE) {
                throw new Error(`Attempted to write to outside of memory to location ${loc}`);
            }
            Atomics.store(this._sharedArray, loc, val);
        }
        WriteExternal(loc, val) {
            this.Write(loc + Memory.EXTERNAL_START, val);
            //console.log(`Wrote external location ${loc + Memory.EXTERNAL_START} with value ${val}`);
        }
        Clear() {
            for (let i = 0; i < 65535; i++) {
                if (i === MemMapIO.DSR) {
                    this.WriteWithNoSets(i, 0x8000);
                }
                else {
                    this.WriteWithNoSets(i, 0);
                }
            }
        }
        Load(binaryInfo) {
            for (let [key, IBinary] of binaryInfo) {
                for (let [addr, value] of IBinary.binary) {
                    if (addr === MemMapIO.DSR) {
                        this.WriteWithNoSets(addr, 0x8000);
                    }
                    else {
                        this.WriteWithNoSets(addr, value);
                    }
                }
            }
        }
        EnableMachine() {
            this.MCR |= Memory.CLOCK_ENABLE_MASK;
        }
        DisableMachine() {
            this.MCR &= -32769;
        }
        IncIndex0() {
            this._sharedArray[0] += 1;
            //console.log(`Machine: ${this._sharedArray[0]}`);
        }
        ReadRegister(index) {
            return this.ReadExternal(ExtMemIndex.R0 + index);
        }
        WriteRegister(index, value) {
            this.WriteExternal(ExtMemIndex.R0 + index, value);
        }
        SetDisplayReady() {
            this.DSR |= 0x8000;
        }
    }
    class InterfaceMemory extends Memory {
        constructor() {
            let buffer = new SharedArrayBuffer(Memory.BYTE_SIZE);
            super(buffer);
        }
        static Create() {
            if (!crossOriginIsolated) {
                throw new Error("Could not create Interface Memory due to cross origin policy (not isolated) required for shared array buffer.");
            }
            else {
                console.log("Created Interface Memory...");
            }
            return new InterfaceMemory();
        }
    }
    class WorkerMemory extends Memory {
        constructor(buffer) {
            super(buffer);
        }
        static Create(buffer) {
            if (crossOriginIsolated) {
                return new WorkerMemory(buffer);
            }
            else {
                throw new Error("Could not create Worker Memory due to cross origin policy (not isolated) required for shared array buffer.");
            }
        }
    }
    // memory_old.js
    /*
     * The memory class keeps up with memory contents.
     *
     */
    /*
    let ddr_en = true;

    // Register proxy object for setting CC?
    let r = Array(8).fill(0);

    // Proxy object for simulator memory.
    let mo = Array(65535).fill(0);
    const proxyMemory = {
        get(t_mo, i, p_m){
            // Set events for reading here.
            // KBDR read.
            if (i == 0xFE02) {
                t_mo[0xFE00] &= 0x7FFF;
                //self.postMessage([MSG.INACK])
            }
            return t_mo[i];
        }
    };
    const m = new Proxy(mo, proxyMemory);

    class Memory {
        constructor(simulator) {
            this.sim = simulator;
            this.ddrEn = true;
            this._value = Array(65535).fill(0);
            this.mem_val = Array(65535).fill(0);
            this.mem_bp  = Array(65535).fill(false);
            this.table = document.getElementById("memTable");
            this.fieldset = document.getElementById("memory_fieldset");

            this.mem_tab_offset = 0;

            const num_col = 2;
            const num_row = 10;

            //value.innerHTML = "x" + ("000" + this.reg_val[key].toString(16)).substr(-4).toUpperCase();

            this.mem_tab_val = [];
            this.mem_tab_addr = [];

            for (var i = 0; i < num_row; i++) {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                this.mem_tab_addr.push(td1);
                td1.className = "mem_name_col"
                td1.innerHTML = "x" + ("000" + i.toString(16)).substr(-4).toUpperCase();
                var td2 = document.createElement("td");
                this.mem_tab_val.push(td2);
                td2.className = "mem_name_col"
                td2.innerHTML = "x" + ("000" + this.mem_val[i].toString(16)).substr(-4).toUpperCase();
                tr.appendChild(td1);
                tr.appendChild(td2);
                this.table.appendChild(tr);
            }

            var that = this;
            // Set up events.
            this.fieldset.addEventListener("wheel", (ev) => {
                if (ev.deltaY > 0) {
                    simulator.m.updateMemoryTable(1);
                } else {
                    simulator.m.updateMemoryTable(0);
                }
            });
            // Keeps page from scrolling on table. Temporary solution?
            this.fieldset.addEventListener("mouseenter", (event)=>{
                document.body.style.overflow = 'hidden';
            });
            this.fieldset.addEventListener("mouseleave", (event)=>{
                document.body.style.overflow = 'auto';
            });
                
        }
        Get(addr) {
            return this._value[addr];
        }
        Set(addr, val) {
            // Logic to handle which memory location is being set.
            // Update value in memory.

            // Update graphics display
            if((addr >= 0xC000) || (addr <= 0xFDFF)){
                this.sim.graphics.print(addr, "red");
                this._value[addr] = val;
            }
            // DDR set.
            if (addr == 0xFE06) {
                if(this.ddrEn){
                    this._value[0xFE04] |= 0x8000;
                    this._value[0xFE06] = val;
                    this.ddrEn = false;
                    this.sim.console.print(val);
                    this.ddrEn = true;
                }
            }
            // KBSR set.
        }
        Reset() {

        }
        saysHello() {
            console.log("hello"+this.name1);
        }
        // Which direction is which?
        updateMemoryTable(down=2) {
            if (down == 1){
                this.mem_tab_offset += 2;
                if(this.mem_tab_offset >= 65535){
                    this.mem_tab_offset = 65535 - 10;
                }
            } else if (down == 0) {
                this.mem_tab_offset -= 2;
                if (this.mem_tab_offset < 0){
                    this.mem_tab_offset = 0;
                }
            }
            for (var i = 0; i < 10; i++) {
                this.mem_tab_addr[i].innerHTML = "x" + ("000" + (i+this.mem_tab_offset).toString(16)).substr(-4).toUpperCase();
                this.mem_tab_val[i].innerHTML = "x" + ("000" + (this._value[i+this.mem_tab_offset]).toString(16)).substr(-4).toUpperCase();
            }
        }
    };*/
    // registers.js
    // Condition code flag enumeration.
    /*var CC_FLAGS = {
        P : 0x1,
        Z : 0x2,
        N : 0x4
    };

    class Registers {
        constructor() {
            this.table = document.getElementById("regTable");
            this.list = ["R0", "R6", "R1", "R7", "R2", "PC", "R3", "MPR", "R4", "PSR", "R5", "CC"];
            let listLength = Math.trunc(this.list.length/2);
            this.cells = {}; // Access by this.cells["R0"].
            for(let i = 0; i < listLength; i++){
                this.cells[this.list[2*i]] = this.table.rows[i].cells[1];
                this.cells[this.list[2*i+1]] = this.table.rows[i].cells[3];
            }

            this.R   = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
            this.PC  = 0x0000;
            this.MPR = 0x0000;
            this.PSR = 0x0000;
            this.CC  = 0x0002;
        }

        // Sets the condition code.
        SetCC(val) {
            if(val == 0){
                this.CC = CC_FLAGS.Z;
            } else if((val & 0x8000) == 0x8000){
                this.CC = CC_FLAGS.N;
            } else{ // Not zero, not negative, must be positive.
                this.CC = CC_FLAGS.P;
            }
        }

        // Updates all Registers table elements in GUI.
        updateRegTab() {
            this.UpdateCell("R0",  this.R[0]);
            this.UpdateCell("R1",  this.R[1]);
            this.UpdateCell("R2",  this.R[2]);
            this.UpdateCell("R3",  this.R[3]);
            this.UpdateCell("R4",  this.R[4]);
            this.UpdateCell("R5",  this.R[5]);
            this.UpdateCell("R6",  this.R[6]);
            this.UpdateCell("R7",  this.R[7]);
            this.UpdateCell("PC",  this.PC);
            this.UpdateCell("MPR", this.MPR);
            this.UpdateCell("PSR", this.PSR);
            this.UpdateCC();
        }
        
        // Updates Registers table element in GUI.
        // val is passed in as decimal.
        UpdateCell(reg, val) {
            let r = this.cells[reg];
            r.innerHTML = "x" + ("000" + val.toString(16)).substr(-4).toUpperCase();
        }
        
        // CC is a unique entry. We use the CC_FLAGS enum to set/check the value.
        UpdateCC() {
            let r = this.cells["CC"];
            switch(this.CC){
                case CC_FLAGS.N:
                    r.innerHTML = "N";
                    break;
                case CC_FLAGS.Z:
                    r.innerHTML = "Z";
                    break;
                case CC_FLAGS.P:
                    r.innerHTML = "P";
                    break;
                default:
                    r.innerHTML = "?";
            }
        }
    }*/
    // Later to implement
    /*
    simulator.registers.reg_list["R0"].addEventListener("keypress", (event)=>{
            // #13 is the Enter key.
            if (event.keyCode == 13) {
                
            }
        });
    */

    const L = false;
    ValueToBus(0, 8);
    ValueToBus(0, 16);
    ValueToBus(1, 16);
    ValueToBus(-1, 16);
    function ValueToBus(value, size) {
        let bus = new Array(size).fill(L);
        const busSize = bus.length;
        for (let i = 0; i < busSize; i++)
            bus[i] = ((0x1 << i) & value) !== 0;
        return bus;
    }

    const CC_FLAGS = {
        P: 0x1,
        Z: 0x2,
        N: 0x4
    };
    class Lc3Fsm {
        _memory;
        _state;
        static _INIT_STATE = 18;
        get State() { return this._state; }
        constructor(memory) {
            this._memory = memory;
            this._state = Lc3Fsm._INIT_STATE;
            this._memory.PC = 0x3000;
            this._memory.INT = 0x0;
            this._memory.DSR = 0x8000;
        }
        Step() {
            // State machine
            console.log(`State: ${this._state}, DSR: ${this._memory.DSR.toString(16)}, R1: ${this._memory.R6.toString(16)}, CC: ${this._memory.CC.toString(16)}`);
            this._memory;
            switch (this._state) {
                case 0: { // BR
                    if (this._memory.BEN) {
                        this._state = 22;
                    }
                    else {
                        this._state = 18;
                    }
                    break;
                }
                case 1: { // ADD
                    let OP2 = 0x0;
                    let DR = (this._memory.IR >> 9) & 0x7;
                    let SR1 = (this._memory.IR >> 6) & 0x7;
                    if (this._memory.IR & 0x20) {
                        // imm5
                        OP2 = this._SignExt(this._memory.IR & 0x1F, 4);
                    }
                    else {
                        // SR2
                        OP2 = this._memory.ReadRegister(this._memory.IR & 0x07);
                    }
                    let result = (this._memory.ReadRegister(SR1) + OP2) & 0xFFFF;
                    this._memory.WriteRegister(DR, result);
                    this._SetCC(result);
                    this._state = 18;
                    break;
                }
                case 2: { // LD
                    let off9 = this._memory.IR & 0x1FF;
                    off9 = this._SignExt(off9, 8);
                    this._memory.MAR = (this._memory.PC + off9) & 0xFFFF;
                    this._SetAcv();
                    this._state = 35;
                    break;
                }
                case 3: { // ST
                    let off9 = this._memory.IR & 0x1FF;
                    off9 = this._SignExt(off9, 8);
                    this._memory.MAR = (this._memory.PC + off9) & 0xFFFF;
                    this._SetAcv();
                    this._state = 23;
                    break;
                }
                case 4: { // JSR
                    if (this._memory.IR & 0x800) {
                        this._state = 21;
                    }
                    else {
                        this._state = 20;
                    }
                    break;
                }
                case 5: { // AND
                    let OP2 = 0x0;
                    let DR = (this._memory.IR >> 9) & 0x7;
                    let SR1 = (this._memory.IR >> 6) & 0x7;
                    if (this._memory.IR & 0x20) {
                        // imm5
                        OP2 = this._SignExt(this._memory.IR & 0x1F, 4);
                    }
                    else {
                        // SR2
                        OP2 = this._memory.ReadRegister(this._memory.IR & 0x07);
                    }
                    let result = (this._memory.ReadRegister(SR1) & OP2) & 0xFFFF;
                    this._memory.WriteRegister(DR, result);
                    this._SetCC(result);
                    this._state = 18;
                    break;
                }
                case 6: { // LDR
                    let baseR = (this._memory.IR >> 6) & 0x7;
                    let off6 = this._SignExt(this._memory.IR & 0x3F, 5);
                    this._memory.MAR = (this._memory.ReadRegister(baseR) + off6) & 0xFFFF;
                    this._SetAcv();
                    this._state = 35;
                    break;
                }
                case 7: { // STR
                    let baseR = (this._memory.IR >> 6) & 0x7;
                    let off6 = this._SignExt(this._memory.IR & 0x3F, 5);
                    this._memory.MAR = (this._memory.ReadRegister(baseR) + off6) & 0xFFFF;
                    this._SetAcv();
                    this._state = 23;
                    break;
                }
                case 8: { // RTI
                    this._memory.MAR = this._memory.ReadRegister(6);
                    if (this._memory.Priv == 0x1) {
                        this._state = 44;
                    }
                    else {
                        this._state = 36;
                    }
                    break;
                }
                case 9: { // NOT
                    let SR = (this._memory.IR >> 6) & 0x7;
                    let DR = (this._memory.IR >> 9) & 0x7;
                    let result = (~this._memory.ReadRegister(SR)) & 0xFFFF;
                    this._memory.WriteRegister(DR, result);
                    this._SetCC(result);
                    this._state = 18;
                    break;
                }
                case 10: { // LDI
                    let off9 = this._SignExt(this._memory.IR & 0x1FF, 8);
                    this._memory.MAR = (this._memory.PC + off9) & 0xFFFF;
                    this._SetAcv();
                    this._state = 17;
                    break;
                }
                case 11: { // STI
                    let off9 = this._SignExt(this._memory.IR & 0x1FF, 8);
                    this._memory.MAR = (this._memory.PC + off9) & 0xFFFF;
                    this._SetAcv();
                    this._state = 19;
                    break;
                }
                case 12: { // JMP
                    let baseR = (this._memory.IR >> 6) & 0x7;
                    this._memory.PC = this._memory.ReadRegister(baseR);
                    this._state = 18;
                    break;
                }
                case 13: { // Invalid Instruction.
                    this._memory.Table = 0x01;
                    this._memory.Vector = 0x01;
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Priv = 0x0;
                    if (this._memory.Priv == 0x1) {
                        this._state = 45;
                    }
                    else {
                        this._state = 37;
                    }
                    break;
                }
                case 14: { // LEA
                    let off9 = this._SignExt(this._memory.IR & 0x1FF, 8);
                    let DR = (this._memory.IR >> 9) & 0x7;
                    this._memory.WriteRegister(DR, this._memory.PC + off9);
                    this._state = 18;
                    break;
                }
                case 15: { // TRAP
                    this._memory.Table = 0x00;
                    this._memory.PC += 1;
                    this._memory.MDR = this._memory.PSR;
                    this._state = 47;
                    break;
                }
                case 16: {
                    // Would implmement memory read flag here: R.
                    this._memory.Write(this._memory.MAR, this._memory.MDR);
                    this._state = 18;
                    break;
                }
                case 17: {
                    if (this._memory.ACV == 0x1) {
                        this._state = 56;
                    }
                    else {
                        this._state = 24;
                    }
                    break;
                }
                case 18: {
                    this._memory.MAR = this._memory.PC;
                    this._memory.PC += 1;
                    //console.log(`State 18 PC: ${this._memory.PC}`);
                    this._SetAcv();
                    if (this._memory.INT == 1) {
                        this._state = 49;
                    }
                    else {
                        this._state = 33;
                    }
                    break;
                }
                case 19: {
                    if (this._memory.ACV == 0x1) {
                        this._state = 61;
                    }
                    else {
                        this._state = 29;
                    }
                    break;
                }
                case 20: {
                    // JSRR
                    this._memory.WriteRegister(7, this._memory.PC);
                    let BaseR = (this._memory.IR >> 6) & 0x7;
                    this._memory.PC = this._memory.ReadRegister(BaseR);
                    this._state = 18;
                    break;
                }
                case 21: {
                    // JSR Continued
                    this._memory.WriteRegister(7, this._memory.PC);
                    let off11 = this._SignExt(this._memory.IR & 0x7FF, 10);
                    this._memory.PC = (this._memory.PC + off11) & 0xFFFF;
                    this._state = 18;
                    break;
                }
                case 22: {
                    // Get off9 and add to PC.
                    //console.log(`Old PC: ${this._memory.PC.toString(16)}`);
                    let off9 = this._SignExt(this._memory.IR & 0x1FF, 8);
                    this._memory.PC += off9;
                    //console.log(`new PC: ${this._memory.PC.toString(16)}, off9: ${off9.toString(16)}`);
                    this._state = 18;
                    break;
                }
                case 23: {
                    let SR = (this._memory.IR >> 9) & 0x7;
                    this._memory.MDR = this._memory.ReadRegister(SR);
                    if (this._memory.ACV == 0x1) {
                        this._state = 48;
                    }
                    else {
                        this._state = 16;
                    }
                    break;
                }
                case 24: {
                    // Would implmement memory read flag here: R.
                    this._memory.MDR = this._memory.Read(this._memory.MAR);
                    this._state = 26;
                    break;
                }
                case 25: {
                    // Would implmement memory read flag here: R.
                    this._memory.MDR = this._memory.Read(this._memory.MAR);
                    this._state = 27;
                    break;
                }
                case 26: {
                    this._memory.MAR = this._memory.MDR;
                    this._SetAcv();
                    this._state = 35;
                    break;
                }
                case 27: {
                    let DR = (this._memory.IR >> 9) & 0x7;
                    this._memory.WriteRegister(DR, this._memory.MDR);
                    this._SetCC(this._memory.MDR);
                    this._state = 18;
                    break;
                }
                case 28: {
                    // Would implmement memory read flag here: R.
                    this._memory.MDR = this._memory.Read(this._memory.MAR);
                    this._state = 30;
                    break;
                }
                case 29: {
                    // Would implmement memory read flag here: R.
                    this._memory.MDR = this._memory.Read(this._memory.MAR);
                    this._state = 31;
                    break;
                }
                case 30: {
                    this._memory.IR = this._memory.MDR;
                    this._state = 32;
                    break;
                }
                case 31: {
                    this._memory.MAR = this._memory.MDR;
                    this._SetAcv();
                    this._state = 23;
                    break;
                }
                case 32: {
                    let N = (this._memory.CC >> 2) & 0x1;
                    let Z = (this._memory.CC >> 1) & 0x1;
                    let P = (this._memory.CC >> 0) & 0x1;
                    //console.log(`CC: ${this._memory.CC.toString(2)}, IR: ${this._memory.IR.toString(2).padStart(16, '0')}`);
                    //console.log(`${((this._memory.IR >> 10) & 0x1) & N}, ${N}, ${this._memory.IR >> 10}`);
                    this._memory.BEN = (((this._memory.IR >> 11) & 0x1) & N) | (((this._memory.IR >> 10) & 0x1) & Z) | (((this._memory.IR >> 9) & 0x1) & P);
                    console.log(`IR: ${this._memory.IR.toString(16)}, PC: ${(this._memory.PC - 1).toString(16)}, BEN: ${this._memory.BEN}, R7: ${this._memory.R7}`);
                    this._state = (this._memory.IR >> 12) & 0x000F;
                    break;
                }
                case 33: {
                    if (this._memory.ACV == 0x1) {
                        this._state = 60;
                    }
                    else {
                        this._state = 28;
                    }
                    break;
                }
                case 34: {
                    let spP1 = this._memory.ReadRegister(6) + 1;
                    this._memory.WriteRegister(6, spP1);
                    if (this._memory.Priv == 0x1) {
                        this._state = 59;
                    }
                    else {
                        this._state = 51;
                    }
                    break;
                }
                case 35: {
                    if (this._memory.ACV == 0x1) {
                        this._state = 57;
                    }
                    else {
                        this._state = 25;
                    }
                    break;
                }
                case 36: {
                    // Would implmement memory read flag here: R.
                    this._memory.MDR = this._memory.Read(this._memory.MAR);
                    this._state = 38;
                    break;
                }
                case 37: {
                    let spM1 = this._memory.ReadRegister(6) - 1;
                    this._memory.MAR = spM1;
                    this._memory.WriteRegister(6, spM1);
                    this._state = 41;
                    break;
                }
                case 38: {
                    this._memory.PC = this._memory.MDR;
                    this._state = 39;
                    break;
                }
                case 39: {
                    let spP1 = this._memory.ReadRegister(6) + 1;
                    this._memory.MAR = spP1;
                    this._memory.WriteRegister(6, spP1);
                    this._state = 40;
                    break;
                }
                case 40: {
                    // Would implmement memory read flag here: R.
                    this._memory.MDR = this._memory.Read(this._memory.MAR);
                    this._state = 42;
                    break;
                }
                case 41: {
                    // Would implmement memory read flag here: R.
                    this._memory.Write(this._memory.MAR, this._memory.MDR);
                    this._state = 43;
                    break;
                }
                case 42: {
                    this._memory.PSR = this._memory.MDR;
                    this._state = 34;
                    break;
                }
                case 43: {
                    this._memory.MDR = this._memory.PC - 1;
                    this._state = 46;
                    break;
                }
                case 44: {
                    this._memory.Table = 0x01;
                    this._memory.Vector = 0x00;
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Priv = 0x0;
                    this._state = 45;
                    break;
                }
                case 45: {
                    this._memory.Saved_SSP = this._memory.PSR;
                    this._memory.PSR = this._memory.Saved_USP;
                    this._state = 37;
                    break;
                }
                case 46: {
                    let spM1 = this._memory.ReadRegister(6) - 1;
                    this._memory.MAR = spM1;
                    this._memory.WriteRegister(6, spM1);
                    this._state = 52;
                    break;
                }
                case 47: {
                    this._memory.Vector = this._memory.IR & 0xFF;
                    this._memory.Priv = 0x0;
                    if (this._memory.Priv == 0x1) {
                        this._state = 45;
                    }
                    else {
                        this._state = 37;
                    }
                    break;
                }
                case 48: {
                    this._memory.Table = 0x01;
                    this._memory.Vector = 0x02;
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Priv = 0x0;
                    this._state = 45;
                    break;
                }
                case 49: { // This deviates from the state diagram.
                    if (this._memory.Priv == 0x01) {
                        this._state = 45;
                    }
                    else {
                        this._state = 37;
                    }
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Table = 0x01;
                    this._memory.Vector = this._memory.INTV;
                    this._memory.Priority = this._memory.INTP;
                    this._memory.Priv = 0x00;
                    break;
                }
                case 51: {
                    this._state = 18;
                    break;
                }
                case 52: {
                    // Would implmement memory read flag here: R.
                    this._memory.Write(this._memory.MAR, this._memory.MDR);
                    this._state = 54;
                    break;
                }
                case 53: {
                    // Would implmement memory read flag here: R.
                    this._memory.MDR = this._memory.Read(this._memory.MAR);
                    this._state = 55;
                    break;
                }
                case 54: {
                    this._memory.MAR = (this._memory.Table << 8) | this._memory.Vector;
                    this._state = 53;
                    break;
                }
                case 55: {
                    this._memory.PC = this._memory.MDR;
                    this._state = 18;
                    break;
                }
                case 56: {
                    this._memory.Table = 0x01;
                    this._memory.Vector = 0x02;
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Priv = 0x0;
                    this._state = 45;
                    break;
                }
                case 57: {
                    this._memory.Table = 0x01;
                    this._memory.Vector = 0x02;
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Priv = 0x0;
                    this._state = 45;
                    break;
                }
                case 59: {
                    this._memory.Saved_SSP = this._memory.ReadRegister(6);
                    this._memory.WriteRegister(6, this._memory.Saved_USP);
                    this._state = 18;
                    break;
                }
                case 60: {
                    this._memory.Table = 0x01;
                    this._memory.Vector = 0x02;
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Priv = 0x0;
                    this._state = 45;
                    break;
                }
                case 61: {
                    this._memory.Table = 0x01;
                    this._memory.Vector = 0x02;
                    this._memory.MDR = this._memory.PSR;
                    this._memory.Priv = 0x0;
                    this._state = 45;
                    break;
                }
                default: // 50, 58, 62, 63
                    // Also possibly includes state 51, since that state does "Nothing".
                    throw new Error("Invalid LC3 State.");
            }
        }
        _SetCC(val) {
            if (val == 0) {
                this._memory.CC = CC_FLAGS.Z;
            }
            else if ((val & 0x8000) == 0x8000) {
                this._memory.CC = CC_FLAGS.N;
            }
            else { // Not zero, not negative, must be positive.
                this._memory.CC = CC_FLAGS.P;
            }
        }
        _SignExt(val, pos, size = 16) {
            let posMask = 0x1 << pos;
            let negative = (0 != (val & posMask));
            let result = 0x0;
            if (negative) {
                let extMask = ((2 ** (size - (pos + 1))) - 1) << (pos + 1);
                result = val | extMask;
            }
            else {
                let keepMask = (2 ** (pos + 1)) - 1;
                result = val & keepMask;
            }
            return result;
        }
        _SetAcv() {
            if (((this._memory.MAR < 0x3000) || (this._memory.MAR >= 0xFE00)) && ((this._memory.Priv & 0x1) == 0x1)) {
                this._memory.ACV = 0x1;
            }
            else {
                this._memory.ACV = 0x0;
            }
        }
    }

    class Elements {
        static machineWorkerPath = "assets/lc3tutor/js/machine_worker.js";
        static loadBtnID = "lc3EmuLoadBtn";
        static resetBtnID = "lc3EmuResetBtn";
        static scriptBtnID = "lc3EmuScriptBtn";
        static nextBtnID = "lc3EmuNextBtn";
        static stepBtnID = "lc3EmuStepBtn";
        static continueBtnID = "lc3EmuContinueBtn";
        static stopBtnID = "lc3EmuStopBtn";
        static memContID = "memory-container";
        static memTableID = "memory-table";
        static regTableID = "register-table";
        static cmdInID = "cmd_in";
        static outputID = "cmd_out";
        static consoleID = "console";
        loadBtn;
        resetBtn;
        scriptBtn;
        nextBtn;
        stepBtn;
        continueBtn;
        stopBtn;
        cmd_in;
        output;
        console;
        memCont;
        memTable;
        regTable;
        _errors = [];
        constructor() {
            this.cmd_in = this._InitInput(Elements.cmdInID);
            this.output = this._InitInput(Elements.outputID);
            this.console = this._InitInput(Elements.consoleID);
            this.loadBtn = this._InitButton(Elements.loadBtnID);
            this.resetBtn = this._InitButton(Elements.resetBtnID);
            this.scriptBtn = this._InitButton(Elements.scriptBtnID);
            this.nextBtn = this._InitButton(Elements.nextBtnID);
            this.stepBtn = this._InitButton(Elements.stepBtnID);
            this.continueBtn = this._InitButton(Elements.continueBtnID);
            this.stopBtn = this._InitButton(Elements.stopBtnID);
            // Create a function if multiple elements of a type are created.
            this.memCont = this._InitElement(Elements.memContID, 'div');
            this.memTable = this._InitElement(Elements.memTableID, 'table');
            this.regTable = this._InitElement(Elements.regTableID, 'table');
            // Check for errors.
            if (this._errors.length > 0) {
                let temp = `You have invalid emulator element IDs:\n   ${this._errors.join("\n   ")}`;
                throw new Error(temp);
            }
        }
        // Must call data type with correct tag.
        _InitElement(id, tag) {
            let temp = document.getElementById(id);
            if (!temp) {
                temp = document.createElement(tag);
                this._errors.push(`Invalid ${tag} element ID: ${id}`);
            }
            return temp;
        }
        _InitInput(id) {
            return this._InitElement(id, 'input');
        }
        _InitButton(id) {
            return this._InitElement(id, 'button');
        }
    }

    class MemoryTable {
        _memCont;
        _memTable;
        _memory;
        static updateInterval = 50; // msec
        constructor(elements, memory) {
            this._memTable = elements.memTable;
            this._memCont = elements.memCont;
            this._memory = memory;
            this._memCont.addEventListener('scroll', () => {
                let dataIndex = Math.floor(this._memCont.scrollTop / 10);
                this._memTable.style.top = `${this._memCont.scrollTop + 1}px`;
                //console.log(this._memCont.scrollTop);
                //console.log(dataIndex);
                //console.log(this._memTable.style.top);
                this._UpdateTable(dataIndex);
            });
            setInterval(() => {
                let dataIndex = Math.floor(this._memCont.scrollTop / 10);
                this._memTable.style.top = `${this._memCont.scrollTop + 1}px`;
                this._UpdateTable(dataIndex);
            }, MemoryTable.updateInterval);
            this._memTable.style.position = 'relative';
            this._memTable.style.top = '1px';
            this._memTable.style.left = '1px';
            this._UpdateTable(0);
        }
        _UpdateTable(index) {
            let firstRow = 1;
            let lastRow = 24;
            for (let i = firstRow; i <= lastRow; i++) {
                this._memTable.rows[i].cells[0].innerHTML = `x${index.toString(16).padStart(4, '0').toUpperCase()}`;
                this._memTable.rows[i].cells[1].innerHTML = `x${this._memory.Read(index).toString(16).padStart(4, '0').toUpperCase()}`;
                //console.log(`i: ${i}, index: ${index}, addr: ${this.data[index]["addr"]}`)
                index++;
            }
        }
        GoToPosition(index) {
            this._memCont.scrollTop = index * 10;
            this._memTable.style.top = `${this._memCont.scrollTop + 1}px`;
            this._UpdateTable(index);
        }
    }

    class RegisterTable {
        _regTable;
        _memory;
        static updateInterval = 500; // msec
        constructor(elements, memory) {
            this._regTable = elements.regTable;
            this._memory = memory;
            setInterval(() => {
                this._UpdateTable();
            }, RegisterTable.updateInterval);
        }
        _UpdateTable() {
            let m = this._memory;
            this._UpdateEntry(1, 1, 16, 4, m.R0);
            this._UpdateEntry(2, 1, 16, 4, m.R1);
            this._UpdateEntry(3, 1, 16, 4, m.R2);
            this._UpdateEntry(4, 1, 16, 4, m.R3);
            this._UpdateEntry(5, 1, 16, 4, m.R4);
            this._UpdateEntry(6, 1, 16, 4, m.R5);
            this._UpdateEntry(7, 1, 16, 4, m.R6);
            this._UpdateEntry(8, 1, 16, 4, m.R7);
            this._UpdateEntry(1, 2, 16, 4, m.PC);
            this._UpdateEntry(2, 2, 16, 4, m.IR);
            this._UpdateEntry(3, 2, 16, 4, m.MCR);
            this._UpdateEntry(4, 2, 16, 4, m.PSR);
            this._UpdateEntry(5, 2, 16, 4, m.MAR);
            this._UpdateEntry(6, 2, 16, 4, m.MDR);
            this._UpdateEntry(7, 2, 2, 1, m.BEN);
            this._UpdateEntry(8, 2, 2, 3, m.CC);
        }
        _UpdateEntry(row, col, base, size, val) {
            col = (col === 2) ? 3 : col;
            let baseChar = (base === 2) ? 'b' : 'x';
            this._regTable.rows[row - 1].cells[col].innerHTML = `${baseChar}${val.toString(base).padStart(size, '0').toUpperCase()}`;
        }
    }

    class Console {
        _console;
        _memory;
        static updateInterval = 10; // msec
        constructor(elements, memory) {
            this._console = elements.console;
            this._memory = memory;
            setInterval(() => {
                this._UpdateConsole();
            }, Console.updateInterval);
        }
        _UpdateConsole() {
            if (this._memory.ProcessDisplay) {
                // Might need to add extra logic to handle escape characters.
                const ascii = String.fromCharCode(this._memory.DisplayData);
                this._console.value += ascii;
                this._console.scrollTop = this._console.scrollHeight;
                this._memory.SetDisplayReady();
            }
        }
    }

    class Machine {
        _memory;
        _worker;
        _memTab;
        _regTab;
        _console;
        _running = false;
        static CONT_START = 1;
        static NEXT_START = 2;
        static STEP_START = 3;
        constructor(elements) {
            if (!window.Worker) {
                throw new Error("Could not initialize the Machine. Web workers are not supported in this window.");
            }
            this._memory = InterfaceMemory.Create();
            this._worker = new Worker(Elements.machineWorkerPath);
            this._worker.postMessage(this._memory.sharedMemory);
            this._memTab = new MemoryTable(elements, this._memory);
            this._regTab = new RegisterTable(elements, this._memory);
            this._console = new Console(elements, this._memory);
        }
        set running(val) {
            // Actions to start/stop machine.
            this._running = val;
        }
        get running() {
            return this._running;
        }
        GetMemoryValue(loc) {
            return this._memory.Read(loc);
        }
        SetMemoryValue(loc, value) {
            this._memory.Write(loc, value);
        }
        ClearMemory() {
            this._memory.Clear();
        }
        LoadMemory(binaryInfo) {
            this.ClearMemory();
            for (let [key, IBinary] of binaryInfo) {
                for (let [addr, value] of IBinary.binary) {
                    if (addr === MemMapIO.DSR) {
                        this.SetMemoryValue(addr, 0x8000);
                    }
                    else {
                        this.SetMemoryValue(addr, value);
                    }
                }
            }
        }
        GoToMemoryAddress(index) {
            this._memTab.GoToPosition(index);
        }
        Start(startType) {
            this._memory.EnableMachine();
            this._memory.StartType = startType;
            this._running = true;
        }
        Stop() {
            this._memory.DisableMachine();
            this._running = false;
        }
    }

    var machineMemory; // Shared array with GUI.
    // This kicks off the machine worker. GUI will send first message with Shared Array Buffer as the event data.
    self.onmessage = function (event) {
        const sharedBuffer = event.data;
        console.log("Machine Worker Prompted...");
        machineMemory = WorkerMemory.Create(sharedBuffer);
        ExecuteMachineWorker();
    };
    // Idle the machine worker for ms milliseconds.
    function sleep(ms) {
        const sab = new SharedArrayBuffer(4);
        const int32 = new Int32Array(sab);
        Atomics.wait(int32, 0, 0, ms); // Wait for `ms` milliseconds
    }
    function WaitOnStart() {
        while (!machineMemory.MachineEnabled) {
            sleep(500);
            console.log("Sleeiping...");
        }
    }
    function ExecuteMachineWorker() {
        //let machineState: MachineState = new MachineState(); // Implement in next phase.
        let lc3Fsm = new Lc3Fsm(machineMemory);
        while (true) {
            WaitOnStart();
            console.log("Machine started!");
            while (machineMemory.MachineEnabled) {
                // machineState.Update();
                // Here is where breakpoint and step logic will go.
                // Will need to investigate how to perform an instruction cycle.
                lc3Fsm.Step();
                let stopMachine = (machineMemory.StartType === Machine.STEP_START) ||
                    ((machineMemory.StartType === Machine.NEXT_START) && lc3Fsm.State === 18) ||
                    (false); // Last condition is for breakpoints to be implemented.
                if (stopMachine) {
                    machineMemory.DisableMachine();
                }
            }
            console.log("Machine stopped");
        }
    }

})();
