/**
 * MIT License
 *
 * Copyright (c) 2020 Jay Wilson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var React = require('react');
var reactBootstrap = require('react-bootstrap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var COUNTRIES = [
    {
        "id": "af",
        "name": "Afghanistan",
        "flag": "🇦🇫",
        "alpha2": "af",
        "alpha3": "afg",
        "ioc": "afg"
    },
    {
        "id": "ax",
        "name": "Åland Islands",
        "flag": "🇦🇽",
        "alpha2": "ax",
        "alpha3": "ala",
        "ioc": ""
    },
    {
        "id": "al",
        "name": "Albania",
        "flag": "🇦🇱",
        "alpha2": "al",
        "alpha3": "alb",
        "ioc": "alb"
    },
    {
        "id": "dz",
        "name": "Algeria",
        "flag": "🇩🇿",
        "alpha2": "dz",
        "alpha3": "dza",
        "ioc": "alg"
    },
    {
        "id": "as",
        "name": "American Samoa",
        "flag": "🇦🇸",
        "alpha2": "as",
        "alpha3": "asm",
        "ioc": "asa"
    },
    {
        "id": "ad",
        "name": "Andorra",
        "flag": "🇦🇩",
        "alpha2": "ad",
        "alpha3": "and",
        "ioc": "and"
    },
    {
        "id": "ao",
        "name": "Angola",
        "flag": "🇦🇴",
        "alpha2": "ao",
        "alpha3": "ago",
        "ioc": "ang"
    },
    {
        "id": "ai",
        "name": "Anguilla",
        "flag": "🇦🇮",
        "alpha2": "ai",
        "alpha3": "aia",
        "ioc": ""
    },
    {
        "id": "aq",
        "name": "Antarctica",
        "flag": "🇦🇶",
        "alpha2": "aq",
        "alpha3": "ata",
        "ioc": ""
    },
    {
        "id": "ag",
        "name": "Antigua And Barbuda",
        "flag": "🇦🇬",
        "alpha2": "ag",
        "alpha3": "atg",
        "ioc": "ant"
    },
    {
        "id": "ar",
        "name": "Argentina",
        "flag": "🇦🇷",
        "alpha2": "ar",
        "alpha3": "arg",
        "ioc": "arg"
    },
    {
        "id": "am",
        "name": "Armenia",
        "flag": "🇦🇲",
        "alpha2": "am",
        "alpha3": "arm",
        "ioc": "arm"
    },
    {
        "id": "aw",
        "name": "Aruba",
        "flag": "🇦🇼",
        "alpha2": "aw",
        "alpha3": "abw",
        "ioc": "aru"
    },
    {
        "id": "au",
        "name": "Australia",
        "flag": "🇦🇺",
        "alpha2": "au",
        "alpha3": "aus",
        "ioc": "aus"
    },
    {
        "id": "at",
        "name": "Austria",
        "flag": "🇦🇹",
        "alpha2": "at",
        "alpha3": "aut",
        "ioc": "aut"
    },
    {
        "id": "az",
        "name": "Azerbaijan",
        "flag": "🇦🇿",
        "alpha2": "az",
        "alpha3": "aze",
        "ioc": "aze"
    },
    {
        "id": "bs",
        "name": "Bahamas",
        "flag": "🇧🇸",
        "alpha2": "bs",
        "alpha3": "bhs",
        "ioc": "bah"
    },
    {
        "id": "bh",
        "name": "Bahrain",
        "flag": "🇧🇭",
        "alpha2": "bh",
        "alpha3": "bhr",
        "ioc": "brn"
    },
    {
        "id": "bd",
        "name": "Bangladesh",
        "flag": "🇧🇩",
        "alpha2": "bd",
        "alpha3": "bgd",
        "ioc": "ban"
    },
    {
        "id": "bb",
        "name": "Barbados",
        "flag": "🇧🇧",
        "alpha2": "bb",
        "alpha3": "brb",
        "ioc": "bar"
    },
    {
        "id": "by",
        "name": "Belarus",
        "flag": "🇧🇾",
        "alpha2": "by",
        "alpha3": "blr",
        "ioc": "blr"
    },
    {
        "id": "be",
        "name": "Belgium",
        "flag": "🇧🇪",
        "alpha2": "be",
        "alpha3": "bel",
        "ioc": "bel"
    },
    {
        "id": "bz",
        "name": "Belize",
        "flag": "🇧🇿",
        "alpha2": "bz",
        "alpha3": "blz",
        "ioc": "biz"
    },
    {
        "id": "bj",
        "name": "Benin",
        "flag": "🇧🇯",
        "alpha2": "bj",
        "alpha3": "ben",
        "ioc": "ben"
    },
    {
        "id": "bm",
        "name": "Bermuda",
        "flag": "🇧🇲",
        "alpha2": "bm",
        "alpha3": "bmu",
        "ioc": "ber"
    },
    {
        "id": "bt",
        "name": "Bhutan",
        "flag": "🇧🇹",
        "alpha2": "bt",
        "alpha3": "btn",
        "ioc": "bhu"
    },
    {
        "id": "bo",
        "name": "Bolivia, Plurinational State Of",
        "flag": "🇧🇴",
        "alpha2": "bo",
        "alpha3": "bol",
        "ioc": "bol"
    },
    {
        "id": "bq",
        "name": "Bonaire, Saint Eustatius And Saba",
        "flag": "🇧🇶",
        "alpha2": "bq",
        "alpha3": "bes",
        "ioc": ""
    },
    {
        "id": "ba",
        "name": "Bosnia & Herzegovina",
        "flag": "🇧🇦",
        "alpha2": "ba",
        "alpha3": "bih",
        "ioc": "bih"
    },
    {
        "id": "bw",
        "name": "Botswana",
        "flag": "🇧🇼",
        "alpha2": "bw",
        "alpha3": "bwa",
        "ioc": "bot"
    },
    {
        "id": "bv",
        "name": "Bouvet Island",
        "flag": "🇧🇻",
        "alpha2": "bv",
        "alpha3": "bvt",
        "ioc": ""
    },
    {
        "id": "br",
        "name": "Brazil",
        "flag": "🇧🇷",
        "alpha2": "br",
        "alpha3": "bra",
        "ioc": "bra"
    },
    {
        "id": "io",
        "name": "British Indian Ocean Territory",
        "flag": "🇮🇴",
        "alpha2": "io",
        "alpha3": "iot",
        "ioc": ""
    },
    {
        "id": "bn",
        "name": "Brunei Darussalam",
        "flag": "🇧🇳",
        "alpha2": "bn",
        "alpha3": "brn",
        "ioc": "bru"
    },
    {
        "id": "bg",
        "name": "Bulgaria",
        "flag": "🇧🇬",
        "alpha2": "bg",
        "alpha3": "bgr",
        "ioc": "bul"
    },
    {
        "id": "bf",
        "name": "Burkina Faso",
        "flag": "🇧🇫",
        "alpha2": "bf",
        "alpha3": "bfa",
        "ioc": "bur"
    },
    {
        "id": "bi",
        "name": "Burundi",
        "flag": "🇧🇮",
        "alpha2": "bi",
        "alpha3": "bdi",
        "ioc": "bdi"
    },
    {
        "id": "cv",
        "name": "Cabo Verde",
        "flag": "🇨🇻",
        "alpha2": "cv",
        "alpha3": "cpv",
        "ioc": "cpv"
    },
    {
        "id": "kh",
        "name": "Cambodia",
        "flag": "🇰🇭",
        "alpha2": "kh",
        "alpha3": "khm",
        "ioc": "cam"
    },
    {
        "id": "cm",
        "name": "Cameroon",
        "flag": "🇨🇲",
        "alpha2": "cm",
        "alpha3": "cmr",
        "ioc": "cmr"
    },
    {
        "id": "ca",
        "name": "Canada",
        "flag": "🇨🇦",
        "alpha2": "ca",
        "alpha3": "can",
        "ioc": "can"
    },
    {
        "id": "ky",
        "name": "Cayman Islands",
        "flag": "🇰🇾",
        "alpha2": "ky",
        "alpha3": "cym",
        "ioc": "cay"
    },
    {
        "id": "cf",
        "name": "Central African Republic",
        "flag": "🇨🇫",
        "alpha2": "cf",
        "alpha3": "caf",
        "ioc": "caf"
    },
    {
        "id": "td",
        "name": "Chad",
        "flag": "🇹🇩",
        "alpha2": "td",
        "alpha3": "tcd",
        "ioc": "cha"
    },
    {
        "id": "cl",
        "name": "Chile",
        "flag": "🇨🇱",
        "alpha2": "cl",
        "alpha3": "chl",
        "ioc": "chi"
    },
    {
        "id": "cn",
        "name": "China",
        "flag": "🇨🇳",
        "alpha2": "cn",
        "alpha3": "chn",
        "ioc": "chn"
    },
    {
        "id": "cx",
        "name": "Christmas Island",
        "flag": "🇨🇽",
        "alpha2": "cx",
        "alpha3": "cxr",
        "ioc": ""
    },
    {
        "id": "cc",
        "name": "Cocos (Keeling) Islands",
        "flag": "🇨🇨",
        "alpha2": "cc",
        "alpha3": "cck",
        "ioc": ""
    },
    {
        "id": "co",
        "name": "Colombia",
        "flag": "🇨🇴",
        "alpha2": "co",
        "alpha3": "col",
        "ioc": "col"
    },
    {
        "id": "km",
        "name": "Comoros",
        "flag": "🇰🇲",
        "alpha2": "km",
        "alpha3": "com",
        "ioc": "com"
    },
    {
        "id": "ck",
        "name": "Cook Islands",
        "flag": "🇨🇰",
        "alpha2": "ck",
        "alpha3": "cok",
        "ioc": "cok"
    },
    {
        "id": "cr",
        "name": "Costa Rica",
        "flag": "🇨🇷",
        "alpha2": "cr",
        "alpha3": "cri",
        "ioc": "crc"
    },
    {
        "id": "hr",
        "name": "Croatia",
        "flag": "🇭🇷",
        "alpha2": "hr",
        "alpha3": "hrv",
        "ioc": "cro"
    },
    {
        "id": "cu",
        "name": "Cuba",
        "flag": "🇨🇺",
        "alpha2": "cu",
        "alpha3": "cub",
        "ioc": "cub"
    },
    {
        "id": "cw",
        "name": "Curacao",
        "flag": "🇨🇼",
        "alpha2": "cw",
        "alpha3": "cuw",
        "ioc": ""
    },
    {
        "id": "cy",
        "name": "Cyprus",
        "flag": "🇨🇾",
        "alpha2": "cy",
        "alpha3": "cyp",
        "ioc": "cyp"
    },
    {
        "id": "cz",
        "name": "Czech Republic",
        "flag": "🇨🇿",
        "alpha2": "cz",
        "alpha3": "cze",
        "ioc": "cze"
    },
    {
        "id": "ci",
        "name": "Côte d'Ivoire",
        "flag": "🇨🇮",
        "alpha2": "ci",
        "alpha3": "civ",
        "ioc": "civ"
    },
    {
        "id": "cd",
        "name": "Democratic Republic Of Congo",
        "flag": "🇨🇩",
        "alpha2": "cd",
        "alpha3": "cod",
        "ioc": "cod"
    },
    {
        "id": "dk",
        "name": "Denmark",
        "flag": "🇩🇰",
        "alpha2": "dk",
        "alpha3": "dnk",
        "ioc": "den"
    },
    {
        "id": "dj",
        "name": "Djibouti",
        "flag": "🇩🇯",
        "alpha2": "dj",
        "alpha3": "dji",
        "ioc": "dji"
    },
    {
        "id": "dm",
        "name": "Dominica",
        "flag": "🇩🇲",
        "alpha2": "dm",
        "alpha3": "dma",
        "ioc": "dma"
    },
    {
        "id": "do",
        "name": "Dominican Republic",
        "flag": "🇩🇴",
        "alpha2": "do",
        "alpha3": "dom",
        "ioc": "dom"
    },
    {
        "id": "ec",
        "name": "Ecuador",
        "flag": "🇪🇨",
        "alpha2": "ec",
        "alpha3": "ecu",
        "ioc": "ecu"
    },
    {
        "id": "eg",
        "name": "Egypt",
        "flag": "🇪🇬",
        "alpha2": "eg",
        "alpha3": "egy",
        "ioc": "egy"
    },
    {
        "id": "sv",
        "name": "El Salvador",
        "flag": "🇸🇻",
        "alpha2": "sv",
        "alpha3": "slv",
        "ioc": "esa"
    },
    {
        "id": "gq",
        "name": "Equatorial Guinea",
        "flag": "🇬🇶",
        "alpha2": "gq",
        "alpha3": "gnq",
        "ioc": "geq"
    },
    {
        "id": "er",
        "name": "Eritrea",
        "flag": "🇪🇷",
        "alpha2": "er",
        "alpha3": "eri",
        "ioc": "eri"
    },
    {
        "id": "ee",
        "name": "Estonia",
        "flag": "🇪🇪",
        "alpha2": "ee",
        "alpha3": "est",
        "ioc": "est"
    },
    {
        "id": "et",
        "name": "Ethiopia",
        "flag": "🇪🇹",
        "alpha2": "et",
        "alpha3": "eth",
        "ioc": "eth"
    },
    {
        "id": "fk",
        "name": "Falkland Islands",
        "flag": "🇫🇰",
        "alpha2": "fk",
        "alpha3": "flk",
        "ioc": ""
    },
    {
        "id": "fo",
        "name": "Faroe Islands",
        "flag": "🇫🇴",
        "alpha2": "fo",
        "alpha3": "fro",
        "ioc": "fai"
    },
    {
        "id": "fj",
        "name": "Fiji",
        "flag": "🇫🇯",
        "alpha2": "fj",
        "alpha3": "fji",
        "ioc": "fij"
    },
    {
        "id": "fi",
        "name": "Finland",
        "flag": "🇫🇮",
        "alpha2": "fi",
        "alpha3": "fin",
        "ioc": "fin"
    },
    {
        "id": "fr",
        "name": "France",
        "flag": "🇫🇷",
        "alpha2": "fr",
        "alpha3": "fra",
        "ioc": "fra"
    },
    {
        "id": "gf",
        "name": "French Guiana",
        "flag": "🇬🇫",
        "alpha2": "gf",
        "alpha3": "guf",
        "ioc": ""
    },
    {
        "id": "pf",
        "name": "French Polynesia",
        "flag": "🇵🇫",
        "alpha2": "pf",
        "alpha3": "pyf",
        "ioc": ""
    },
    {
        "id": "tf",
        "name": "French Southern Territories",
        "flag": "🇹🇫",
        "alpha2": "tf",
        "alpha3": "atf",
        "ioc": ""
    },
    {
        "id": "ga",
        "name": "Gabon",
        "flag": "🇬🇦",
        "alpha2": "ga",
        "alpha3": "gab",
        "ioc": "gab"
    },
    {
        "id": "gm",
        "name": "Gambia",
        "flag": "🇬🇲",
        "alpha2": "gm",
        "alpha3": "gmb",
        "ioc": "gam"
    },
    {
        "id": "ge",
        "name": "Georgia",
        "flag": "🇬🇪",
        "alpha2": "ge",
        "alpha3": "geo",
        "ioc": "geo"
    },
    {
        "id": "de",
        "name": "Germany",
        "flag": "🇩🇪",
        "alpha2": "de",
        "alpha3": "deu",
        "ioc": "ger"
    },
    {
        "id": "gh",
        "name": "Ghana",
        "flag": "🇬🇭",
        "alpha2": "gh",
        "alpha3": "gha",
        "ioc": "gha"
    },
    {
        "id": "gi",
        "name": "Gibraltar",
        "flag": "🇬🇮",
        "alpha2": "gi",
        "alpha3": "gib",
        "ioc": ""
    },
    {
        "id": "gr",
        "name": "Greece",
        "flag": "🇬🇷",
        "alpha2": "gr",
        "alpha3": "grc",
        "ioc": "gre"
    },
    {
        "id": "gl",
        "name": "Greenland",
        "flag": "🇬🇱",
        "alpha2": "gl",
        "alpha3": "grl",
        "ioc": ""
    },
    {
        "id": "gd",
        "name": "Grenada",
        "flag": "🇬🇩",
        "alpha2": "gd",
        "alpha3": "grd",
        "ioc": "grn"
    },
    {
        "id": "gp",
        "name": "Guadeloupe",
        "flag": "🇬🇵",
        "alpha2": "gp",
        "alpha3": "glp",
        "ioc": ""
    },
    {
        "id": "gu",
        "name": "Guam",
        "flag": "🇬🇺",
        "alpha2": "gu",
        "alpha3": "gum",
        "ioc": "gum"
    },
    {
        "id": "gt",
        "name": "Guatemala",
        "flag": "🇬🇹",
        "alpha2": "gt",
        "alpha3": "gtm",
        "ioc": "gua"
    },
    {
        "id": "gg",
        "name": "Guernsey",
        "flag": "🇬🇬",
        "alpha2": "gg",
        "alpha3": "ggy",
        "ioc": "gci"
    },
    {
        "id": "gn",
        "name": "Guinea",
        "flag": "🇬🇳",
        "alpha2": "gn",
        "alpha3": "gin",
        "ioc": "gui"
    },
    {
        "id": "gw",
        "name": "Guinea-bissau",
        "flag": "🇬🇼",
        "alpha2": "gw",
        "alpha3": "gnb",
        "ioc": "gbs"
    },
    {
        "id": "gy",
        "name": "Guyana",
        "flag": "🇬🇾",
        "alpha2": "gy",
        "alpha3": "guy",
        "ioc": "guy"
    },
    {
        "id": "ht",
        "name": "Haiti",
        "flag": "🇭🇹",
        "alpha2": "ht",
        "alpha3": "hti",
        "ioc": "hai"
    },
    {
        "id": "hm",
        "name": "Heard Island And McDonald Islands",
        "flag": "🇭🇲",
        "alpha2": "hm",
        "alpha3": "hmd",
        "ioc": ""
    },
    {
        "id": "hn",
        "name": "Honduras",
        "flag": "🇭🇳",
        "alpha2": "hn",
        "alpha3": "hnd",
        "ioc": "hon"
    },
    {
        "id": "hk",
        "name": "Hong Kong",
        "flag": "🇭🇰",
        "alpha2": "hk",
        "alpha3": "hkg",
        "ioc": "hkg"
    },
    {
        "id": "hu",
        "name": "Hungary",
        "flag": "🇭🇺",
        "alpha2": "hu",
        "alpha3": "hun",
        "ioc": "hun"
    },
    {
        "id": "is",
        "name": "Iceland",
        "flag": "🇮🇸",
        "alpha2": "is",
        "alpha3": "isl",
        "ioc": "isl"
    },
    {
        "id": "in",
        "name": "India",
        "flag": "🇮🇳",
        "alpha2": "in",
        "alpha3": "ind",
        "ioc": "ind"
    },
    {
        "id": "id",
        "name": "Indonesia",
        "flag": "🇮🇩",
        "alpha2": "id",
        "alpha3": "idn",
        "ioc": "ina"
    },
    {
        "id": "ir",
        "name": "Iran, Islamic Republic Of",
        "flag": "🇮🇷",
        "alpha2": "ir",
        "alpha3": "irn",
        "ioc": "iri"
    },
    {
        "id": "iq",
        "name": "Iraq",
        "flag": "🇮🇶",
        "alpha2": "iq",
        "alpha3": "irq",
        "ioc": "irq"
    },
    {
        "id": "ie",
        "name": "Ireland",
        "flag": "🇮🇪",
        "alpha2": "ie",
        "alpha3": "irl",
        "ioc": "irl"
    },
    {
        "id": "im",
        "name": "Isle Of Man",
        "flag": "🇮🇲",
        "alpha2": "im",
        "alpha3": "imn",
        "ioc": ""
    },
    {
        "id": "il",
        "name": "Israel",
        "flag": "🇮🇱",
        "alpha2": "il",
        "alpha3": "isr",
        "ioc": "isr"
    },
    {
        "id": "it",
        "name": "Italy",
        "flag": "🇮🇹",
        "alpha2": "it",
        "alpha3": "ita",
        "ioc": "ita"
    },
    {
        "id": "jm",
        "name": "Jamaica",
        "flag": "🇯🇲",
        "alpha2": "jm",
        "alpha3": "jam",
        "ioc": "jam"
    },
    {
        "id": "jp",
        "name": "Japan",
        "flag": "🇯🇵",
        "alpha2": "jp",
        "alpha3": "jpn",
        "ioc": "jpn"
    },
    {
        "id": "je",
        "name": "Jersey",
        "flag": "🇯🇪",
        "alpha2": "je",
        "alpha3": "jey",
        "ioc": "jci"
    },
    {
        "id": "jo",
        "name": "Jordan",
        "flag": "🇯🇴",
        "alpha2": "jo",
        "alpha3": "jor",
        "ioc": "jor"
    },
    {
        "id": "kz",
        "name": "Kazakhstan",
        "flag": "🇰🇿",
        "alpha2": "kz",
        "alpha3": "kaz",
        "ioc": "kaz"
    },
    {
        "id": "ke",
        "name": "Kenya",
        "flag": "🇰🇪",
        "alpha2": "ke",
        "alpha3": "ken",
        "ioc": "ken"
    },
    {
        "id": "ki",
        "name": "Kiribati",
        "flag": "🇰🇮",
        "alpha2": "ki",
        "alpha3": "kir",
        "ioc": "kir"
    },
    {
        "id": "kp",
        "name": "Korea, Democratic People's Republic Of",
        "flag": "🇰🇵",
        "alpha2": "kp",
        "alpha3": "prk",
        "ioc": "prk"
    },
    {
        "id": "kr",
        "name": "Korea, Republic Of",
        "flag": "🇰🇷",
        "alpha2": "kr",
        "alpha3": "kor",
        "ioc": "kor"
    },
    {
        "id": "kw",
        "name": "Kuwait",
        "flag": "🇰🇼",
        "alpha2": "kw",
        "alpha3": "kwt",
        "ioc": "kuw"
    },
    {
        "id": "kg",
        "name": "Kyrgyzstan",
        "flag": "🇰🇬",
        "alpha2": "kg",
        "alpha3": "kgz",
        "ioc": "kgz"
    },
    {
        "id": "la",
        "name": "Lao People's Democratic Republic",
        "flag": "🇱🇦",
        "alpha2": "la",
        "alpha3": "lao",
        "ioc": "lao"
    },
    {
        "id": "lv",
        "name": "Latvia",
        "flag": "🇱🇻",
        "alpha2": "lv",
        "alpha3": "lva",
        "ioc": "lat"
    },
    {
        "id": "lb",
        "name": "Lebanon",
        "flag": "🇱🇧",
        "alpha2": "lb",
        "alpha3": "lbn",
        "ioc": "lib"
    },
    {
        "id": "ls",
        "name": "Lesotho",
        "flag": "🇱🇸",
        "alpha2": "ls",
        "alpha3": "lso",
        "ioc": "les"
    },
    {
        "id": "lr",
        "name": "Liberia",
        "flag": "🇱🇷",
        "alpha2": "lr",
        "alpha3": "lbr",
        "ioc": "lbr"
    },
    {
        "id": "ly",
        "name": "Libya",
        "flag": "🇱🇾",
        "alpha2": "ly",
        "alpha3": "lby",
        "ioc": "lba"
    },
    {
        "id": "li",
        "name": "Liechtenstein",
        "flag": "🇱🇮",
        "alpha2": "li",
        "alpha3": "lie",
        "ioc": "lie"
    },
    {
        "id": "lt",
        "name": "Lithuania",
        "flag": "🇱🇹",
        "alpha2": "lt",
        "alpha3": "ltu",
        "ioc": "ltu"
    },
    {
        "id": "lu",
        "name": "Luxembourg",
        "flag": "🇱🇺",
        "alpha2": "lu",
        "alpha3": "lux",
        "ioc": "lux"
    },
    {
        "id": "mo",
        "name": "Macao",
        "flag": "🇲🇴",
        "alpha2": "mo",
        "alpha3": "mac",
        "ioc": "mac"
    },
    {
        "id": "mk",
        "name": "Macedonia, The Former Yugoslav Republic Of",
        "flag": "🇲🇰",
        "alpha2": "mk",
        "alpha3": "mkd",
        "ioc": "mkd"
    },
    {
        "id": "mg",
        "name": "Madagascar",
        "flag": "🇲🇬",
        "alpha2": "mg",
        "alpha3": "mdg",
        "ioc": "mad"
    },
    {
        "id": "mw",
        "name": "Malawi",
        "flag": "🇲🇼",
        "alpha2": "mw",
        "alpha3": "mwi",
        "ioc": "maw"
    },
    {
        "id": "my",
        "name": "Malaysia",
        "flag": "🇲🇾",
        "alpha2": "my",
        "alpha3": "mys",
        "ioc": "mas"
    },
    {
        "id": "mv",
        "name": "Maldives",
        "flag": "🇲🇻",
        "alpha2": "mv",
        "alpha3": "mdv",
        "ioc": "mdv"
    },
    {
        "id": "ml",
        "name": "Mali",
        "flag": "🇲🇱",
        "alpha2": "ml",
        "alpha3": "mli",
        "ioc": "mli"
    },
    {
        "id": "mt",
        "name": "Malta",
        "flag": "🇲🇹",
        "alpha2": "mt",
        "alpha3": "mlt",
        "ioc": "mlt"
    },
    {
        "id": "mh",
        "name": "Marshall Islands",
        "flag": "🇲🇭",
        "alpha2": "mh",
        "alpha3": "mhl",
        "ioc": "mhl"
    },
    {
        "id": "mq",
        "name": "Martinique",
        "flag": "🇲🇶",
        "alpha2": "mq",
        "alpha3": "mtq",
        "ioc": ""
    },
    {
        "id": "mr",
        "name": "Mauritania",
        "flag": "🇲🇷",
        "alpha2": "mr",
        "alpha3": "mrt",
        "ioc": "mtn"
    },
    {
        "id": "mu",
        "name": "Mauritius",
        "flag": "🇲🇺",
        "alpha2": "mu",
        "alpha3": "mus",
        "ioc": "mri"
    },
    {
        "id": "yt",
        "name": "Mayotte",
        "flag": "🇾🇹",
        "alpha2": "yt",
        "alpha3": "myt",
        "ioc": ""
    },
    {
        "id": "mx",
        "name": "Mexico",
        "flag": "🇲🇽",
        "alpha2": "mx",
        "alpha3": "mex",
        "ioc": "mex"
    },
    {
        "id": "fm",
        "name": "Micronesia, Federated States Of",
        "flag": "🇫🇲",
        "alpha2": "fm",
        "alpha3": "fsm",
        "ioc": "fsm"
    },
    {
        "id": "md",
        "name": "Moldova",
        "flag": "🇲🇩",
        "alpha2": "md",
        "alpha3": "mda",
        "ioc": "mda"
    },
    {
        "id": "mc",
        "name": "Monaco",
        "flag": "🇲🇨",
        "alpha2": "mc",
        "alpha3": "mco",
        "ioc": "mon"
    },
    {
        "id": "mn",
        "name": "Mongolia",
        "flag": "🇲🇳",
        "alpha2": "mn",
        "alpha3": "mng",
        "ioc": "mgl"
    },
    {
        "id": "me",
        "name": "Montenegro",
        "flag": "🇲🇪",
        "alpha2": "me",
        "alpha3": "mne",
        "ioc": "mne"
    },
    {
        "id": "ms",
        "name": "Montserrat",
        "flag": "🇲🇸",
        "alpha2": "ms",
        "alpha3": "msr",
        "ioc": ""
    },
    {
        "id": "ma",
        "name": "Morocco",
        "flag": "🇲🇦",
        "alpha2": "ma",
        "alpha3": "mar",
        "ioc": "mar"
    },
    {
        "id": "mz",
        "name": "Mozambique",
        "flag": "🇲🇿",
        "alpha2": "mz",
        "alpha3": "moz",
        "ioc": "moz"
    },
    {
        "id": "mm",
        "name": "Myanmar",
        "flag": "🇲🇲",
        "alpha2": "mm",
        "alpha3": "mmr",
        "ioc": "mya"
    },
    {
        "id": "na",
        "name": "Namibia",
        "flag": "🇳🇦",
        "alpha2": "na",
        "alpha3": "nam",
        "ioc": "nam"
    },
    {
        "id": "nr",
        "name": "Nauru",
        "flag": "🇳🇷",
        "alpha2": "nr",
        "alpha3": "nru",
        "ioc": "nru"
    },
    {
        "id": "np",
        "name": "Nepal",
        "flag": "🇳🇵",
        "alpha2": "np",
        "alpha3": "npl",
        "ioc": "nep"
    },
    {
        "id": "nl",
        "name": "Netherlands",
        "flag": "🇳🇱",
        "alpha2": "nl",
        "alpha3": "nld",
        "ioc": "ned"
    },
    {
        "id": "nc",
        "name": "New Caledonia",
        "flag": "🇳🇨",
        "alpha2": "nc",
        "alpha3": "ncl",
        "ioc": ""
    },
    {
        "id": "nz",
        "name": "New Zealand",
        "flag": "🇳🇿",
        "alpha2": "nz",
        "alpha3": "nzl",
        "ioc": "nzl"
    },
    {
        "id": "ni",
        "name": "Nicaragua",
        "flag": "🇳🇮",
        "alpha2": "ni",
        "alpha3": "nic",
        "ioc": "nca"
    },
    {
        "id": "ne",
        "name": "Niger",
        "flag": "🇳🇪",
        "alpha2": "ne",
        "alpha3": "ner",
        "ioc": "nig"
    },
    {
        "id": "ng",
        "name": "Nigeria",
        "flag": "🇳🇬",
        "alpha2": "ng",
        "alpha3": "nga",
        "ioc": "ngr"
    },
    {
        "id": "nu",
        "name": "Niue",
        "flag": "🇳🇺",
        "alpha2": "nu",
        "alpha3": "niu",
        "ioc": ""
    },
    {
        "id": "nf",
        "name": "Norfolk Island",
        "flag": "🇳🇫",
        "alpha2": "nf",
        "alpha3": "nfk",
        "ioc": ""
    },
    {
        "id": "mp",
        "name": "Northern Mariana Islands",
        "flag": "🇲🇵",
        "alpha2": "mp",
        "alpha3": "mnp",
        "ioc": ""
    },
    {
        "id": "no",
        "name": "Norway",
        "flag": "🇳🇴",
        "alpha2": "no",
        "alpha3": "nor",
        "ioc": "nor"
    },
    {
        "id": "om",
        "name": "Oman",
        "flag": "🇴🇲",
        "alpha2": "om",
        "alpha3": "omn",
        "ioc": "oma"
    },
    {
        "id": "pk",
        "name": "Pakistan",
        "flag": "🇵🇰",
        "alpha2": "pk",
        "alpha3": "pak",
        "ioc": "pak"
    },
    {
        "id": "pw",
        "name": "Palau",
        "flag": "🇵🇼",
        "alpha2": "pw",
        "alpha3": "plw",
        "ioc": "plw"
    },
    {
        "id": "ps",
        "name": "Palestinian Territory, Occupied",
        "flag": "🇵🇸",
        "alpha2": "ps",
        "alpha3": "pse",
        "ioc": "ple"
    },
    {
        "id": "pa",
        "name": "Panama",
        "flag": "🇵🇦",
        "alpha2": "pa",
        "alpha3": "pan",
        "ioc": "pan"
    },
    {
        "id": "pg",
        "name": "Papua New Guinea",
        "flag": "🇵🇬",
        "alpha2": "pg",
        "alpha3": "png",
        "ioc": "png"
    },
    {
        "id": "py",
        "name": "Paraguay",
        "flag": "🇵🇾",
        "alpha2": "py",
        "alpha3": "pry",
        "ioc": "par"
    },
    {
        "id": "pe",
        "name": "Peru",
        "flag": "🇵🇪",
        "alpha2": "pe",
        "alpha3": "per",
        "ioc": "per"
    },
    {
        "id": "ph",
        "name": "Philippines",
        "flag": "🇵🇭",
        "alpha2": "ph",
        "alpha3": "phl",
        "ioc": "phi"
    },
    {
        "id": "pn",
        "name": "Pitcairn",
        "flag": "🇵🇳",
        "alpha2": "pn",
        "alpha3": "pcn",
        "ioc": ""
    },
    {
        "id": "pl",
        "name": "Poland",
        "flag": "🇵🇱",
        "alpha2": "pl",
        "alpha3": "pol",
        "ioc": "pol"
    },
    {
        "id": "pt",
        "name": "Portugal",
        "flag": "🇵🇹",
        "alpha2": "pt",
        "alpha3": "prt",
        "ioc": "por"
    },
    {
        "id": "pr",
        "name": "Puerto Rico",
        "flag": "🇵🇷",
        "alpha2": "pr",
        "alpha3": "pri",
        "ioc": "pur"
    },
    {
        "id": "qa",
        "name": "Qatar",
        "flag": "🇶🇦",
        "alpha2": "qa",
        "alpha3": "qat",
        "ioc": "qat"
    },
    {
        "id": "cg",
        "name": "Republic Of Congo",
        "flag": "🇨🇬",
        "alpha2": "cg",
        "alpha3": "cog",
        "ioc": "cgo"
    },
    {
        "id": "re",
        "name": "Reunion",
        "flag": "🇷🇪",
        "alpha2": "re",
        "alpha3": "reu",
        "ioc": ""
    },
    {
        "id": "ro",
        "name": "Romania",
        "flag": "🇷🇴",
        "alpha2": "ro",
        "alpha3": "rou",
        "ioc": "rou"
    },
    {
        "id": "ru",
        "name": "Russian Federation",
        "flag": "🇷🇺",
        "alpha2": "ru",
        "alpha3": "rus",
        "ioc": "rus"
    },
    {
        "id": "rw",
        "name": "Rwanda",
        "flag": "🇷🇼",
        "alpha2": "rw",
        "alpha3": "rwa",
        "ioc": "rwa"
    },
    {
        "id": "bl",
        "name": "Saint Barthélemy",
        "flag": "🇧🇱",
        "alpha2": "bl",
        "alpha3": "blm",
        "ioc": ""
    },
    {
        "id": "sh",
        "name": "Saint Helena, Ascension And Tristan Da Cunha",
        "flag": "🇸🇭",
        "alpha2": "sh",
        "alpha3": "shn",
        "ioc": ""
    },
    {
        "id": "kn",
        "name": "Saint Kitts And Nevis",
        "flag": "🇰🇳",
        "alpha2": "kn",
        "alpha3": "kna",
        "ioc": "skn"
    },
    {
        "id": "lc",
        "name": "Saint Lucia",
        "flag": "🇱🇨",
        "alpha2": "lc",
        "alpha3": "lca",
        "ioc": "lca"
    },
    {
        "id": "mf",
        "name": "Saint Martin",
        "flag": "🇲🇫",
        "alpha2": "mf",
        "alpha3": "maf",
        "ioc": ""
    },
    {
        "id": "pm",
        "name": "Saint Pierre And Miquelon",
        "flag": "🇵🇲",
        "alpha2": "pm",
        "alpha3": "spm",
        "ioc": ""
    },
    {
        "id": "vc",
        "name": "Saint Vincent And The Grenadines",
        "flag": "🇻🇨",
        "alpha2": "vc",
        "alpha3": "vct",
        "ioc": "vin"
    },
    {
        "id": "ws",
        "name": "Samoa",
        "flag": "🇼🇸",
        "alpha2": "ws",
        "alpha3": "wsm",
        "ioc": "sam"
    },
    {
        "id": "sm",
        "name": "San Marino",
        "flag": "🇸🇲",
        "alpha2": "sm",
        "alpha3": "smr",
        "ioc": "smr"
    },
    {
        "id": "st",
        "name": "Sao Tome and Principe",
        "flag": "🇸🇹",
        "alpha2": "st",
        "alpha3": "stp",
        "ioc": "stp"
    },
    {
        "id": "sa",
        "name": "Saudi Arabia",
        "flag": "🇸🇦",
        "alpha2": "sa",
        "alpha3": "sau",
        "ioc": "ksa"
    },
    {
        "id": "sn",
        "name": "Senegal",
        "flag": "🇸🇳",
        "alpha2": "sn",
        "alpha3": "sen",
        "ioc": "sen"
    },
    {
        "id": "rs",
        "name": "Serbia",
        "flag": "🇷🇸",
        "alpha2": "rs",
        "alpha3": "srb",
        "ioc": "srb"
    },
    {
        "id": "sc",
        "name": "Seychelles",
        "flag": "🇸🇨",
        "alpha2": "sc",
        "alpha3": "syc",
        "ioc": "sey"
    },
    {
        "id": "sl",
        "name": "Sierra Leone",
        "flag": "🇸🇱",
        "alpha2": "sl",
        "alpha3": "sle",
        "ioc": "sle"
    },
    {
        "id": "sg",
        "name": "Singapore",
        "flag": "🇸🇬",
        "alpha2": "sg",
        "alpha3": "sgp",
        "ioc": "sin"
    },
    {
        "id": "sx",
        "name": "Sint Maarten",
        "flag": "🇸🇽",
        "alpha2": "sx",
        "alpha3": "sxm",
        "ioc": ""
    },
    {
        "id": "sk",
        "name": "Slovakia",
        "flag": "🇸🇰",
        "alpha2": "sk",
        "alpha3": "svk",
        "ioc": "svk"
    },
    {
        "id": "si",
        "name": "Slovenia",
        "flag": "🇸🇮",
        "alpha2": "si",
        "alpha3": "svn",
        "ioc": "slo"
    },
    {
        "id": "sb",
        "name": "Solomon Islands",
        "flag": "🇸🇧",
        "alpha2": "sb",
        "alpha3": "slb",
        "ioc": "sol"
    },
    {
        "id": "so",
        "name": "Somalia",
        "flag": "🇸🇴",
        "alpha2": "so",
        "alpha3": "som",
        "ioc": "som"
    },
    {
        "id": "za",
        "name": "South Africa",
        "flag": "🇿🇦",
        "alpha2": "za",
        "alpha3": "zaf",
        "ioc": "rsa"
    },
    {
        "id": "gs",
        "name": "South Georgia And The South Sandwich Islands",
        "flag": "🇬🇸",
        "alpha2": "gs",
        "alpha3": "sgs",
        "ioc": ""
    },
    {
        "id": "ss",
        "name": "South Sudan",
        "flag": "🇸🇸",
        "alpha2": "ss",
        "alpha3": "ssd",
        "ioc": "ssd"
    },
    {
        "id": "es",
        "name": "Spain",
        "flag": "🇪🇸",
        "alpha2": "es",
        "alpha3": "esp",
        "ioc": "esp"
    },
    {
        "id": "lk",
        "name": "Sri Lanka",
        "flag": "🇱🇰",
        "alpha2": "lk",
        "alpha3": "lka",
        "ioc": "sri"
    },
    {
        "id": "sd",
        "name": "Sudan",
        "flag": "🇸🇩",
        "alpha2": "sd",
        "alpha3": "sdn",
        "ioc": "sud"
    },
    {
        "id": "sr",
        "name": "Suriname",
        "flag": "🇸🇷",
        "alpha2": "sr",
        "alpha3": "sur",
        "ioc": "sur"
    },
    {
        "id": "sj",
        "name": "Svalbard And Jan Mayen",
        "flag": "🇸🇯",
        "alpha2": "sj",
        "alpha3": "sjm",
        "ioc": ""
    },
    {
        "id": "sz",
        "name": "Swaziland",
        "flag": "🇸🇿",
        "alpha2": "sz",
        "alpha3": "swz",
        "ioc": "swz"
    },
    {
        "id": "se",
        "name": "Sweden",
        "flag": "🇸🇪",
        "alpha2": "se",
        "alpha3": "swe",
        "ioc": "swe"
    },
    {
        "id": "ch",
        "name": "Switzerland",
        "flag": "🇨🇭",
        "alpha2": "ch",
        "alpha3": "che",
        "ioc": "sui"
    },
    {
        "id": "sy",
        "name": "Syrian Arab Republic",
        "flag": "🇸🇾",
        "alpha2": "sy",
        "alpha3": "syr",
        "ioc": "syr"
    },
    {
        "id": "tw",
        "name": "Taiwan",
        "flag": "🇹🇼",
        "alpha2": "tw",
        "alpha3": "twn",
        "ioc": "tpe"
    },
    {
        "id": "tj",
        "name": "Tajikistan",
        "flag": "🇹🇯",
        "alpha2": "tj",
        "alpha3": "tjk",
        "ioc": "tjk"
    },
    {
        "id": "tz",
        "name": "Tanzania, United Republic Of",
        "flag": "🇹🇿",
        "alpha2": "tz",
        "alpha3": "tza",
        "ioc": "tan"
    },
    {
        "id": "th",
        "name": "Thailand",
        "flag": "🇹🇭",
        "alpha2": "th",
        "alpha3": "tha",
        "ioc": "tha"
    },
    {
        "id": "tl",
        "name": "Timor-Leste, Democratic Republic of",
        "flag": "🇹🇱",
        "alpha2": "tl",
        "alpha3": "tls",
        "ioc": "tls"
    },
    {
        "id": "tg",
        "name": "Togo",
        "flag": "🇹🇬",
        "alpha2": "tg",
        "alpha3": "tgo",
        "ioc": "tog"
    },
    {
        "id": "tk",
        "name": "Tokelau",
        "flag": "🇹🇰",
        "alpha2": "tk",
        "alpha3": "tkl",
        "ioc": ""
    },
    {
        "id": "to",
        "name": "Tonga",
        "flag": "🇹🇴",
        "alpha2": "to",
        "alpha3": "ton",
        "ioc": "tga"
    },
    {
        "id": "tt",
        "name": "Trinidad And Tobago",
        "flag": "🇹🇹",
        "alpha2": "tt",
        "alpha3": "tto",
        "ioc": "tto"
    },
    {
        "id": "tn",
        "name": "Tunisia",
        "flag": "🇹🇳",
        "alpha2": "tn",
        "alpha3": "tun",
        "ioc": "tun"
    },
    {
        "id": "tr",
        "name": "Turkey",
        "flag": "🇹🇷",
        "alpha2": "tr",
        "alpha3": "tur",
        "ioc": "tur"
    },
    {
        "id": "tm",
        "name": "Turkmenistan",
        "flag": "🇹🇲",
        "alpha2": "tm",
        "alpha3": "tkm",
        "ioc": "tkm"
    },
    {
        "id": "tc",
        "name": "Turks And Caicos Islands",
        "flag": "🇹🇨",
        "alpha2": "tc",
        "alpha3": "tca",
        "ioc": ""
    },
    {
        "id": "tv",
        "name": "Tuvalu",
        "flag": "🇹🇻",
        "alpha2": "tv",
        "alpha3": "tuv",
        "ioc": "tuv"
    },
    {
        "id": "ug",
        "name": "Uganda",
        "flag": "🇺🇬",
        "alpha2": "ug",
        "alpha3": "uga",
        "ioc": "uga"
    },
    {
        "id": "ua",
        "name": "Ukraine",
        "flag": "🇺🇦",
        "alpha2": "ua",
        "alpha3": "ukr",
        "ioc": "ukr"
    },
    {
        "id": "ae",
        "name": "United Arab Emirates",
        "flag": "🇦🇪",
        "alpha2": "ae",
        "alpha3": "are",
        "ioc": "uae"
    },
    {
        "id": "gb",
        "name": "United Kingdom",
        "flag": "🇬🇧",
        "alpha2": "gb",
        "alpha3": "gbr",
        "ioc": "gbr"
    },
    {
        "id": "us",
        "name": "United States",
        "flag": "🇺🇸",
        "alpha2": "us",
        "alpha3": "usa",
        "ioc": "usa"
    },
    {
        "id": "um",
        "name": "United States Minor Outlying Islands",
        "flag": "🇺🇲",
        "alpha2": "um",
        "alpha3": "umi",
        "ioc": ""
    },
    {
        "id": "uy",
        "name": "Uruguay",
        "flag": "🇺🇾",
        "alpha2": "uy",
        "alpha3": "ury",
        "ioc": "uru"
    },
    {
        "id": "uz",
        "name": "Uzbekistan",
        "flag": "🇺🇿",
        "alpha2": "uz",
        "alpha3": "uzb",
        "ioc": "uzb"
    },
    {
        "id": "vu",
        "name": "Vanuatu",
        "flag": "🇻🇺",
        "alpha2": "vu",
        "alpha3": "vut",
        "ioc": "van"
    },
    {
        "id": "va",
        "name": "Vatican City State",
        "flag": "🇻🇦",
        "alpha2": "va",
        "alpha3": "vat",
        "ioc": ""
    },
    {
        "id": "ve",
        "name": "Venezuela, Bolivarian Republic Of",
        "flag": "🇻🇪",
        "alpha2": "ve",
        "alpha3": "ven",
        "ioc": "ven"
    },
    {
        "id": "vn",
        "name": "Viet Nam",
        "flag": "🇻🇳",
        "alpha2": "vn",
        "alpha3": "vnm",
        "ioc": "vie"
    },
    {
        "id": "vg",
        "name": "Virgin Islands (British)",
        "flag": "🇻🇬",
        "alpha2": "vg",
        "alpha3": "vgb",
        "ioc": "ivb"
    },
    {
        "id": "vi",
        "name": "Virgin Islands (US)",
        "flag": "🇻🇮",
        "alpha2": "vi",
        "alpha3": "vir",
        "ioc": "isv"
    },
    {
        "id": "wf",
        "name": "Wallis And Futuna",
        "flag": "🇼🇫",
        "alpha2": "wf",
        "alpha3": "wlf",
        "ioc": ""
    },
    {
        "id": "eh",
        "name": "Western Sahara",
        "flag": "🇪🇭",
        "alpha2": "eh",
        "alpha3": "esh",
        "ioc": ""
    },
    {
        "id": "ye",
        "name": "Yemen",
        "flag": "🇾🇪",
        "alpha2": "ye",
        "alpha3": "yem",
        "ioc": "yem"
    },
    {
        "id": "zm",
        "name": "Zambia",
        "flag": "🇿🇲",
        "alpha2": "zm",
        "alpha3": "zmb",
        "ioc": "zam"
    },
    {
        "id": "zw",
        "name": "Zimbabwe",
        "flag": "🇿🇼",
        "alpha2": "zw",
        "alpha3": "zwe",
        "ioc": "zim"
    },
];

var applyExclusionsAndAdditions = function (countries, exclusions, additions) {
    if (!exclusions && !additions)
        return countries;
    var excluded = (exclusions || []).reduce(function (acc, id) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[id] = true, _a)));
    }, {});
    return __spreadArray(__spreadArray([], countries.filter(function (c) { return excluded[c.id] === undefined; }), true), (additions || []), true);
};
var filter = function (matchNameFromStart, matchAbbreviations) { return function (inputText) {
    var regex = new RegExp("".concat(matchNameFromStart ? '^' : '').concat(inputText), 'i');
    return matchAbbreviations
        ? function (_a) {
            var name = _a.name, alpha2 = _a.alpha2, alpha3 = _a.alpha3, ioc = _a.ioc;
            return regex.test(name) || regex.test(alpha2) || regex.test(alpha3) || regex.test(ioc);
        }
        : function (_a) {
            var name = _a.name;
            return regex.test(name);
        };
}; };
var getInitialList = function (countries, sort) { return sort ? __spreadArray([], countries.sort(sort), true) : __spreadArray([], countries, true); };
var getUpdatedList = function (inputText, list, activeListItemIndex, countries, matchNameFromStart, matchAbbreviations, sort) {
    var currentActiveCountry = list[activeListItemIndex];
    var countryFilter = filter(matchNameFromStart, matchAbbreviations)(inputText);
    var updatedList = sort ? __spreadArray([], countries.filter(countryFilter).sort(sort), true) : __spreadArray([], countries.filter(countryFilter), true);
    var newActiveCountryIndex = -1;
    if (updatedList.length === 1) {
        newActiveCountryIndex = 0;
    }
    else if (currentActiveCountry) {
        var index = updatedList.findIndex(function (country) { return country.id === currentActiveCountry.id; });
        newActiveCountryIndex = Number.isFinite(index) ? index : -1;
    }
    return [
        updatedList,
        newActiveCountryIndex,
    ];
};
var EMOJI_FLAG_REGEX = /^[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/;
var removeEmojiFlag = function (str) { return str.replace(EMOJI_FLAG_REGEX, ''); };
var classNames = function (items) { return items.filter(function (item) { return !!item; }).join(' '); };

var ListItem = React.forwardRef(function (_a, ref) {
    var classPrefix = _a.classPrefix, country = _a.country, flag = _a.country.flag, active = _a.active, countryLabelFormatter = _a.countryLabelFormatter, flags = _a.flags, onClick = _a.onClick;
    var className = classNames([
        "".concat(classPrefix, "__list-item"),
        active && 'active',
    ]);
    return (React__default["default"].createElement("li", { className: className, onClick: onClick, ref: ref },
        flags ? React__default["default"].createElement("span", { className: "".concat(classPrefix, "__flag") }, flag) : null,
        countryLabelFormatter(country)));
});

var List = function (_a) {
    var classPrefix = _a.classPrefix, containerEl = _a.containerEl, list = _a.list, activeItemIndex = _a.activeItemIndex, countryLabelFormatter = _a.countryLabelFormatter, flags = _a.flags, onItemClick = _a.onItemClick, onActiveItemOverflow = _a.onActiveItemOverflow;
    var listEl = React.useRef(null);
    var activeItemEl = React.useRef(null);
    React.useEffect(function () {
        if (containerEl && activeItemEl.current) {
            var containerHeight = containerEl.offsetHeight;
            var containerScrollTop = containerEl.scrollTop;
            var activeItemTop = activeItemEl.current.offsetTop;
            var activeItemHeight = activeItemEl.current.offsetHeight;
            var activeItemBottom = activeItemTop + activeItemHeight;
            var overflowOffTopAmount = containerScrollTop - activeItemTop;
            var overflowOffBottomAmount = activeItemBottom - (containerHeight + containerScrollTop);
            var isOverflowBeyondTop = overflowOffTopAmount > 0;
            var isOverflowBeyondBottom = overflowOffBottomAmount > 0;
            // TODO: handle overlay beyond window bottom
            if (isOverflowBeyondTop)
                onActiveItemOverflow(-overflowOffTopAmount);
            if (isOverflowBeyondBottom)
                onActiveItemOverflow(overflowOffBottomAmount);
        }
    }, [containerEl, listEl, activeItemEl, onActiveItemOverflow]);
    return (React__default["default"].createElement("ul", { className: "".concat(classPrefix, "__list"), ref: listEl }, list.map(function (country, itemIndex) { return (React__default["default"].createElement(ListItem, { key: country.alpha2, classPrefix: classPrefix, country: country, active: itemIndex === activeItemIndex, countryLabelFormatter: countryLabelFormatter, flags: flags, onClick: function () { return onItemClick(itemIndex); }, ref: itemIndex === activeItemIndex ? activeItemEl : undefined })); })));
};

var OverlayContent = function (_a) {
    var classPrefix = _a.classPrefix, list = _a.list, activeListItemIndex = _a.activeListItemIndex, countryLabelFormatter = _a.countryLabelFormatter, flags = _a.flags, noMatchesText = _a.noMatchesText, _b = _a.maxHeight, maxHeight = _b === void 0 ? 225 : _b, onListItemClick = _a.onListItemClick;
    var el = React.useRef(null);
    var handleAciveItemCutOff = function (overflowAmount) {
        if (el.current) {
            el.current.scrollTop = el.current.scrollTop + overflowAmount;
        }
    };
    return (React__default["default"].createElement("div", { className: "".concat(classPrefix, "__overlay-content"), style: {
            maxHeight: "".concat(maxHeight, "px"),
        }, ref: el },
        !(list.length >= 1) &&
            React__default["default"].createElement("div", { className: "".concat(classPrefix, "__no-matches") }, noMatchesText),
        (list.length >= 1) &&
            React__default["default"].createElement(List, { classPrefix: classPrefix, containerEl: el.current || undefined, list: list, activeItemIndex: activeListItemIndex, countryLabelFormatter: countryLabelFormatter, flags: flags, onItemClick: onListItemClick, onActiveItemOverflow: handleAciveItemCutOff })));
};

var DEFAULT_CLASS_PREFIX = 'country-select';
var INIT = 'INIT';
var FOCUS = 'FOCUS';
var BLUR = 'BLUR';
var TEXT_CHANGE = 'TEXT_CHANGE';
var ACTIVE_LIST_ITEM_CHANGE = 'ACTIVE_LIST_ITEM_CHANGE';
var COUNTRY_SELECT = 'COUNTRY_SELECT';
var CLEAR = 'CLEAR';

var INITIAL_STATE = {
    focused: false,
    filterOptions: null,
    combinedCountries: [],
    inputText: '',
    list: [],
    activeListItemIndex: -1,
};
var init$1 = function (state, _a) {
    var combinedCountries = _a.combinedCountries;
    return (__assign(__assign({}, state), { combinedCountries: combinedCountries, list: __spreadArray([], combinedCountries, true) }));
};
var focus$1 = function (state) { return (__assign(__assign({}, state), { focused: true })); };
var blur$1 = function (state) { return (__assign(__assign({}, state), { focused: false })); };
var textChange$1 = function (state, _a) {
    var inputText = _a.inputText, list = _a.list, activeListItemIndex = _a.activeListItemIndex;
    return __assign(__assign({}, state), { inputText: inputText, list: list, activeListItemIndex: activeListItemIndex });
};
var activeListItemChange$1 = function (state, _a) {
    var activeListItemIndex = _a.activeListItemIndex;
    return (__assign(__assign({}, state), { activeListItemIndex: activeListItemIndex }));
};
var countrySelect$1 = function (state) { return (__assign(__assign({}, state), { inputText: '', list: __spreadArray([], state.combinedCountries, true), activeListItemIndex: -1 })); };
var clear$1 = function (state) { return (__assign(__assign({}, state), { inputText: '', list: __spreadArray([], state.combinedCountries, true), activeListItemIndex: -1 })); };
var reducer = function (state, action) {
    switch (action.type) {
        case INIT: return init$1(state, action);
        case FOCUS: return focus$1(state);
        case BLUR: return blur$1(state);
        case TEXT_CHANGE: return textChange$1(state, action);
        case ACTIVE_LIST_ITEM_CHANGE: return activeListItemChange$1(state, action);
        case COUNTRY_SELECT: return countrySelect$1(state);
        case CLEAR: return clear$1(state);
        default: throw new Error("No such reducer action: ".concat(action.type));
    }
};

var init = function (dispatch) { return function (combinedCountries) { return dispatch({
    type: INIT,
    combinedCountries: combinedCountries,
}); }; };
var focus = function (dispatch) { return function () { return dispatch({
    type: FOCUS,
}); }; };
var blur = function (dispatch) { return function () { return dispatch({
    type: BLUR,
}); }; };
var textChange = function (dispatch) { return function (inputText, list, activeListItemIndex) { return dispatch({
    type: TEXT_CHANGE,
    inputText: inputText,
    list: list,
    activeListItemIndex: activeListItemIndex,
}); }; };
var activeListItemChange = function (dispatch) { return function (activeListItemIndex) { return dispatch({
    type: ACTIVE_LIST_ITEM_CHANGE,
    activeListItemIndex: activeListItemIndex,
}); }; };
var countrySelect = function (dispatch) { return function () { return dispatch({
    type: COUNTRY_SELECT,
}); }; };
var clear = function (dispatch) { return function () { return dispatch({
    type: CLEAR,
}); }; };

var CountrySelect = function (_a) {
    var value = _a.value, _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b, onTextChange = _a.onTextChange, _c = _a.countries, countries = _c === void 0 ? __spreadArray([], COUNTRIES, true) : _c, exclusions = _a.exclusions, additions = _a.additions, _d = _a.valueAs, valueAs = _d === void 0 ? 'object' : _d, _e = _a.flags, flags = _e === void 0 ? true : _e, _f = _a.flush, flush = _f === void 0 ? true : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.placeholder, placeholder = _h === void 0 ? 'Type or select country...' : _h, _j = _a.noMatchesText, noMatchesText = _j === void 0 ? 'No matches' : _j, size = _a.size, sort = _a.sort, // e.g. (c1, c2) => c1.name < c2.name ? -1 : (c1.name > c2.name ? 1 : 0),
    _k = _a.matchNameFromStart, // e.g. (c1, c2) => c1.name < c2.name ? -1 : (c1.name > c2.name ? 1 : 0),
    matchNameFromStart = _k === void 0 ? true : _k, _l = _a.matchAbbreviations, matchAbbreviations = _l === void 0 ? false : _l, _m = _a.countryLabelFormatter, countryLabelFormatter = _m === void 0 ? function (_a) {
        var name = _a.name;
        return name;
    } : _m, _o = _a.throwInvalidValueError, throwInvalidValueError = _o === void 0 ? false : _o, listMaxHeight = _a.listMaxHeight, _p = _a.closeOnSelect, closeOnSelect = _p === void 0 ? true : _p, _q = _a.formControlProps, formControlProps = _q === void 0 ? {} : _q, _r = _a.overlayProps, overlayProps = _r === void 0 ? {} : _r, _s = _a.classPrefix, classPrefix = _s === void 0 ? DEFAULT_CLASS_PREFIX : _s, className = _a.className;
    var inputGroupRef = React.useRef(null);
    var formControlRef = React.useRef(null);
    var hasInitRef = React.useRef(false);
    var _t = React.useState(-1), width = _t[0], setWidth = _t[1];
    var _u = React.useReducer(reducer, INITIAL_STATE), _v = _u[0], focused = _v.focused, inputText = _v.inputText, list = _v.list, activeListItemIndex = _v.activeListItemIndex, combinedCountries = _v.combinedCountries, dispatch = _u[1];
    var handleFocus = focus(dispatch);
    var handleBlur = blur(dispatch);
    var handleTextChange = textChange(dispatch);
    var handleListActiveItemChange = activeListItemChange(dispatch);
    var handleCountrySelect = countrySelect(dispatch);
    var handleClear = clear(dispatch);
    var getCountryId = function (value) { return (typeof value === 'string' ? value : value.id); };
    var selectedCountry = value ? (combinedCountries || []).find(function (country) { return country.id === getCountryId(value); }) : null;
    if (throwInvalidValueError && value && !selectedCountry)
        throw new Error("No matching country for value: ".concat(JSON.stringify(value)));
    React.useEffect(function () {
        if (hasInitRef.current)
            return;
        var combinedCountries = applyExclusionsAndAdditions(countries, exclusions, additions);
        var sorted = getInitialList(combinedCountries, sort);
        init(dispatch)(sorted);
        hasInitRef.current = true;
    }, [countries, exclusions, additions, sort]);
    React.useEffect(function () {
        if (inputGroupRef.current) {
            //console.log('width: ', inputGroupRef.current.offsetWidth);
            setWidth(inputGroupRef.current.offsetWidth);
        }
    }, [inputGroupRef.current]);
    var select = function (listItemIndex) {
        var country = list[listItemIndex];
        handleCountrySelect();
        onChange(valueAs === 'id' ? country.id : country);
    };
    var escape = function () {
        handleClear();
        onChange(null);
    };
    var inputChange = function (text, ev) {
        if (selectedCountry && flags) {
            text = removeEmojiFlag(text);
        }
        var _a = getUpdatedList(text, list, activeListItemIndex, combinedCountries, matchNameFromStart, matchAbbreviations, sort), updatedList = _a[0], updatedActiveListItemIndex = _a[1];
        handleTextChange(text, updatedList, updatedActiveListItemIndex);
        if (onTextChange)
            onTextChange(text, ev);
        if (value)
            onChange(null);
    };
    var handleKey = function (ev) {
        if (ev.key === 'ArrowUp') {
            ev.preventDefault();
            var newIndex = activeListItemIndex <= 0 ? list.length - 1 : activeListItemIndex - 1;
            handleListActiveItemChange(newIndex);
        }
        else if (ev.key === 'ArrowDown') {
            var newIndex = activeListItemIndex >= list.length - 1 ? 0 : activeListItemIndex + 1;
            handleListActiveItemChange(newIndex);
        }
        else if (ev.key === 'Enter') {
            if (activeListItemIndex >= 0)
                select(activeListItemIndex);
        }
        else if (ev.key === 'Escape') {
            escape();
        }
    };
    var classes = classNames([
        className,
        classPrefix,
        flush && "".concat(classPrefix, "--flush"),
    ]);
    return (React__default["default"].createElement("div", { className: classes },
        React__default["default"].createElement(reactBootstrap.InputGroup, { ref: inputGroupRef, className: "".concat(classPrefix, "__input-group"), size: size },
            (!flush && flags) &&
                React__default["default"].createElement(reactBootstrap.InputGroup.Text, { className: "".concat(classPrefix, "__input-group__flag") }, selectedCountry ? selectedCountry.flag : ''),
            React__default["default"].createElement(reactBootstrap.FormControl, __assign({ ref: formControlRef, className: "".concat(classPrefix, "__form-control"), value: selectedCountry ? "".concat(flush && flags ? selectedCountry.flag + '   ' : '').concat(selectedCountry.name) : inputText, onKeyDown: handleKey, onChange: function (ev) { return inputChange(ev.target.value, ev); }, onFocus: handleFocus, onBlur: handleBlur, placeholder: placeholder, disabled: disabled, spellCheck: false, autoComplete: 'country' }, formControlProps))),
        React__default["default"].createElement(reactBootstrap.Overlay, __assign({ target: inputGroupRef.current, rootClose: true, placement: 'bottom-start', show: focused && (!selectedCountry || !closeOnSelect), onHide: function () { }, transition: true }, overlayProps), function (_a) {
            _a.placement; _a.arrowProps; _a.show; _a.popper; var props = __rest(_a, ["placement", "arrowProps", "show", "popper"]);
            return (React__default["default"].createElement("div", __assign({}, props, { style: __assign({ width: (width > 0) ? "".concat(width, "px") : 'calc(100% - 10px)' }, props.style) }),
                React__default["default"].createElement(OverlayContent, { classPrefix: classPrefix, list: list, activeListItemIndex: activeListItemIndex, countryLabelFormatter: countryLabelFormatter, flags: flags, noMatchesText: noMatchesText, maxHeight: listMaxHeight, onListItemClick: select })));
        })));
};
var CountrySelect$1 = React.memo(CountrySelect);

module.exports = CountrySelect$1;
//# sourceMappingURL=index.js.map
