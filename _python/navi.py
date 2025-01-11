import json
from pathlib import Path

CURRENT_DIR = Path(__file__).absolute().parent
SECTIONS_PATH = CURRENT_DIR / Path("../_data/sections.json")
OUTPUT_PATH = CURRENT_DIR / Path("../_data/navigation.json")

json_fp = None
try:
    json_fp = open(SECTIONS_PATH, "r")
except:
    print(f"Could not open file: {SECTIONS_PATH}")

json_obj = None
try:
    json_obj = json.load(json_fp)
except:
    print(f"Could not read JSON object from {SECTIONS_PATH}")

numbered_keys = json_obj["Numbered"].keys()

navi_obj = {"layout": {}, "sections": {}, "subsections": {}}
section_number = "1"
for section, item in json_obj["Numbered"].items():
    navi_obj['sections'][section] = f"{section_number}. {section}"
    navi_obj['layout'][section] = []
    subsection_number = "1"
    for subsection in item["SubSections"]:
        raw_title = subsection['Raw Title']
        navi_obj['layout'][section].append(raw_title)
        parent = section
        title = f"{section_number}.{subsection_number}. {raw_title}"
        link = subsection['permalink']
        navi_obj['subsections'][raw_title] = {
            "parent": parent,
            "title": title,
            "link": link,
            "prev": "",
            "next": ""
        }
        subsection_number = str(int(subsection_number) + 1)
    section_number = str(int(section_number) + 1)

section_letter = "A"
for section, item in json_obj["Lettered"].items():
    navi_obj['sections'][section] = f"{section_letter}. {section}"
    navi_obj['layout'][section] = []
    subsection_number = "1"
    for subsection in item["SubSections"]:
        raw_title = subsection['Raw Title']
        navi_obj['layout'][section].append(raw_title)
        parent = section
        title = f"{section_letter}.{subsection_number}. {raw_title}"
        link = subsection['permalink']
        navi_obj['subsections'][raw_title] = {
            "parent": parent,
            "title": title,
            "link": link,
            "prev": "",
            "next": ""
        }
        subsection_number = str(int(subsection_number) + 1)
    section_letter = chr(ord(section_letter) + 1)

# In this section I need to iterate through the list and determine the prev and next entries.
subsections = list(navi_obj['subsections'].keys())
end = len(subsections)

navi_obj['subsections'][subsections[0]]["prev"] = navi_obj['subsections'][subsections[end-1]]["link"]
navi_obj['subsections'][subsections[0]]["next"] = navi_obj['subsections'][subsections[1]]["link"]
for i, subsection in enumerate(subsections[1:end-1], start=1):
    navi_obj['subsections'][subsection]["prev"] = navi_obj['subsections'][subsections[i-1]]["link"]
    navi_obj['subsections'][subsection]["next"] = navi_obj['subsections'][subsections[i+1]]["link"]
navi_obj['subsections'][subsections[end-1]]["prev"] = navi_obj['subsections'][subsections[end-2]]["link"]
navi_obj['subsections'][subsections[end-1]]["next"] = navi_obj['subsections'][subsections[0]]["link"]

output_fp = open(OUTPUT_PATH, "w")
json.dump(navi_obj, output_fp, indent = 4)
output_fp.close()