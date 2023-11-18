import json
import os

country_to_code_map = {'afghanistan': 'AF', 'åland islands': 'AX', 'albania': 'AL', 'algeria': 'DZ', 'american samoa': 'AS', 'andorra': 'AD', 'angola': 'AO', 'anguilla': 'AI', 'antarctica': 'AQ', 'antigua and barbuda': 'AG', 'argentina': 'AR', 'armenia': 'AM', 'aruba': 'AW', 'australia': 'AU', 'austria': 'AT', 'azerbaijan': 'AZ', 'bahamas': 'BS', 'bahrain': 'BH', 'bangladesh': 'BD', 'barbados': 'BB', 'belarus': 'BY', 'belgium': 'BE', 'belize': 'BZ', 'benin': 'BJ', 'bermuda': 'BM', 'bhutan': 'BT', 'bolivia': 'BO', 'bosnia and herzegovina': 'BA', 'botswana': 'BW', 'brazil': 'BR', 'british indian ocean territory': 'IO', 'british virgin islands': 'VG', 'brunei darussalam': 'BN', 'bulgaria': 'BG', 'burkina faso': 'BF', 'burundi': 'BI', 'cambodia': 'KH', 'cameroon': 'CM', 'canada': 'CA', 'cape verde': 'CV', 'caribbean netherlands': 'BQ', 'cayman islands': 'KY', 'central african republic': 'CF', 'chad': 'TD', 'chile': 'CL', 'china': 'CN', 'christmas island': 'CX', 'cocos islands': 'CC', 'colombia': 'CO', 'comoros': 'KM', 'congo': 'CG', 'cook islands': 'CK', 'costa rica': 'CR', 'croatia': 'HR', 'cuba': 'CU', 'curaçao': 'CW', 'cyprus': 'CY', 'czech republic': 'CZ', 'democratic republic of the congo': 'CD', 'denmark': 'DK', 'djibouti': 'DJ', 'dominica': 'DM', 'dominican republic': 'DO', 'ecuador': 'EC', 'egypt': 'EG', 'el salvador': 'SV', 'equatorial guinea': 'GQ', 'eritrea': 'ER', 'estonia': 'EE', 'ethiopia': 'ET', 'falkland islands': 'FK', 'faroe islands': 'FO', 'federated states of micronesia': 'FM', 'fiji': 'FJ', 'finland': 'FI', 'france': 'FR', 'french guiana': 'GF', 'french polynesia': 'PF', 'french southern territories': 'TF', 'gabon': 'GA', 'gambia': 'GM', 'georgia': 'GE', 'germany': 'DE', 'ghana': 'GH', 'gibraltar': 'GI', 'greece': 'GR', 'greenland': 'GL', 'grenada': 'GD', 'guadeloupe': 'GP', 'guam': 'GU', 'guatemala': 'GT', 'guinea': 'GN', 'guinea-bissau': 'GW', 'guyana': 'GY', 'haiti': 'HT', 'honduras': 'HN', 'hong kong': 'HK', 'hungary': 'HU', 'iceland': 'IS', 'india': 'IN', 'indonesia': 'ID', 'iran': 'IR', 'iraq': 'IQ', 'ireland': 'IE', 'isle of man': 'IM', 'israel': 'IL', 'italy': 'IT', 'ivory coast': 'CI', 'jamaica': 'JM', 'japan': 'JP', 'jersey': 'JE', 'jordan': 'JO', 'kazakhstan': 'KZ', 'kenya': 'KE', 'kiribati': 'KI', 'kosovo': 'XK', 'kuwait': 'KW', 'kyrgyzstan': 'KG', 'laos': 'LA', 'latvia': 'LV', 'lebanon': 'LB', 'lesotho': 'LS', 'liberia': 'LR', 'libya': 'LY', 'liechtenstein': 'LI', 'lithuania': 'LT', 'luxembourg': 'LU', 'macau': 'MO', 'macedonia': 'MK', 'madagascar': 'MG', 'malawi': 'MW', 'malaysia': 'MY', 'maldives': 'MV', 'mali': 'ML', 'malta': 'MT', 'marshall islands': 'MH', 'martinique': 'MQ', 'mauritania': 'MR', 'mauritius': 'MU', 'mayotte': 'YT', 'mexico': 'MX', 'moldova': 'MD', 'monaco': 'MC', 'mongolia': 'MN', 'montenegro': 'ME', 'montserrat': 'MS', 'morocco': 'MA', 'mozambique': 'MZ', 'myanmar': 'MM', 'namibia': 'NA', 'nauru': 'NR', 'nepal': 'NP', 'netherlands': 'NL', 'new caledonia': 'NC', 'new zealand': 'NZ', 'nicaragua': 'NI', 'niger': 'NE', 'nigeria': 'NG', 'niue': 'NU', 'norfolk island': 'NF', 'north korea': 'KP', 'northern mariana islands': 'MP', 'norway': 'NO', 'oman': 'OM', 'pakistan': 'PK', 'palau': 'PW', 'palestine': 'PS', 'panama': 'PA', 'papua new guinea': 'PG', 'paraguay': 'PY', 'peru': 'PE', 'philippines': 'PH', 'pitcairn islands': 'PN', 'poland': 'PL', 'portugal': 'PT', 'puerto rico': 'PR', 'qatar': 'QA', 'reunion': 'RE', 'romania': 'RO', 'russia': 'RU', 'rwanda': 'RW', 'saint helena': 'SH', 'saint kitts and nevis': 'KN', 'saint lucia': 'LC', 'saint pierre and miquelon': 'PM', 'saint vincent and the grenadines': 'VC', 'samoa': 'WS', 'san marino': 'SM', 'são tomé and príncipe': 'ST', 'saudi arabia': 'SA', 'senegal': 'SN', 'serbia': 'RS', 'seychelles': 'SC', 'sierra leone': 'SL', 'singapore': 'SG', 'sint maarten': 'SX', 'slovakia': 'SK', 'slovenia': 'SI', 'solomon islands': 'SB', 'somalia': 'SO', 'south africa': 'ZA', 'south georgia and the south sandwich islands': 'GS', 'south korea': 'KR', 'south sudan': 'SS', 'spain': 'ES', 'sri lanka': 'LK', 'sudan': 'SD', 'suriname': 'SR', 'svalbard and jan mayen': 'SJ', 'eswatini': 'SZ', 'sweden': 'SE', 'switzerland': 'CH', 'syria': 'SY', 'taiwan': 'TW', 'tajikistan': 'TJ', 'tanzania': 'TZ', 'thailand': 'TH', 'timor-leste': 'TL', 'togo': 'TG', 'tokelau': 'TK', 'tonga': 'TO', 'trinidad and tobago': 'TT', 'tunisia': 'TN', 'turkey': 'TR', 'turkmenistan': 'TM', 'turks and caicos islands': 'TC', 'tuvalu': 'TV', 'uganda': 'UG', 'ukraine': 'UA', 'united arab emirates': 'AE', 'united kingdom': 'GB', 'united states': 'US', 'united states minor outlying islands': 'UM', 'united states virgin islands': 'VI', 'uruguay': 'UY', 'uzbekistan': 'UZ', 'vanuatu': 'VU', 'vatican city': 'VA', 'venezuela': 'VE', 'vietnam': 'VN', 'wallis and futuna': 'WF', 'western sahara': 'EH', 'yemen': 'YE', 'zambia': 'ZM', 'zimbabwe': 'ZW'}

COLOR = "#DE8A31"
# Africa "#EBCF46"
# Asia "#CF03FC"
# Europe "#5796FA"

if __name__ == '__main__':
    country_str = input("Name of the country: ")
    tip = input("Tip: ")

    if country_str.lower() not in country_to_code_map.keys():
        raise Exception('Country name not found!')

    country_dict = {
      "name": country_str,
      "color": COLOR,
      "tip": tip
    }

    country_code = country_to_code_map[country_str.lower()]

    # 1. Store this dict in a file of the country code
    filename = country_code + '.json'
    with open(os.path.join('countries', filename), 'w') as file:
        json.dump(country_dict, file)

    # 2. Add this code to the "countries" list of the mapData.json file
    map_data_file = 'mapData.json'
    # Check if mapData.json exists, if not create an empty structure
    if not os.path.exists(map_data_file):
        with open(map_data_file, 'w') as file:
            json.dump({"countries": []}, file)

    # Load existing data from mapData.json
    with open(map_data_file, 'r') as file:
        map_data = json.load(file)

    # Add new country data to the "countries" list
    if country_code not in map_data["countries"]:
        map_data["countries"].append(country_code)

    # Save the updated data back to mapData.json
    with open(map_data_file, 'w') as file:
        json.dump(map_data, file)
