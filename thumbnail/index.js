let datas = [{
    title: '北二环路 20:00-10:00',
    length: 26,
    index: 100,
    speed: 45,
    speeds: [65, 25, 96, 50, 17, 56, 10, 3, 44, 34, 63, 16, 5, 23, 92, 81, 15, 18, 85, 7, 47, 10, 25, 65, 1, 97, 2, 96, 97, 27, 84, 84, 24, 72, 58, 49, 78, 29, 63, 26, 76, 93, 64, 77, 0, 51, 30, 21, 80, 73, 51, 89, 13],
    locations: ["116.310664,40.062708,116.310387,40.062642,116.310062,40.062566,116.309737,40.062488,116.309617,40.06246,116.309005,40.062315", "116.309005,40.062315,116.308823,40.062273", "116.308823,40.062273,116.308076,40.062099", "116.308076,40.062099,116.307595,40.061987,116.307014,40.061803", "116.307014,40.061803,116.306637,40.06168", "116.306637,40.06168,116.306401,40.061576", "116.306401,40.061576,116.306334,40.061546", "116.306334,40.061546,116.306014,40.061399", "116.306014,40.061399,116.305731,40.061269", "116.305731,40.061269,116.305172,40.061013,116.304045,40.060505", "116.304045,40.060505,116.303975,40.060478", "116.303975,40.060478,116.303153,40.060247", "116.303153,40.060247,116.302988,40.060202,116.302198,40.06004", "116.302198,40.06004,116.301526,40.059902", "116.301526,40.059902,116.300922,40.059777", "116.300922,40.059777,116.300586,40.059708", "116.300586,40.059708,116.300072,40.059602", "116.300072,40.059602,116.299718,40.059528", "116.299718,40.059528,116.299427,40.059468,116.299324,40.059462", "116.299324,40.059462,116.298056,40.059172", "116.298056,40.059172,116.297493,40.059043,116.296753,40.058919", "116.296753,40.058919,116.295044,40.058602", "116.295044,40.058602,116.293298,40.058285", "116.293298,40.058285,116.291178,40.057894", "116.291178,40.057894,116.291072,40.057876", "116.291072,40.057876,116.290701,40.057808", "116.290701,40.057808,116.289734,40.05763", "116.289734,40.05763,116.288312,40.057366,116.287296,40.057203", "116.287296,40.057203,116.286273,40.057005", "116.286273,40.057005,116.286163,40.056985", "116.286163,40.056985,116.286093,40.056973", "116.286093,40.056973,116.282987,40.056414", "116.282987,40.056414,116.281028,40.056058", "116.281028,40.056058,116.280961,40.056046", "116.280961,40.056046,116.280897,40.056034", "116.280897,40.056034,116.279297,40.055738", "116.279297,40.055738,116.277738,40.055496", "116.277738,40.055496,116.276742,40.055341,116.276564,40.055338,116.276313,40.055333", "116.276313,40.055333,116.276097,40.055302", "116.276097,40.055302,116.275837,40.055265,116.275756,40.055254", "116.275756,40.055254,116.274808,40.055118", "116.274808,40.055118,116.274583,40.055086", "116.274583,40.055086,116.273721,40.054961", "116.273721,40.054961,116.272556,40.054792", "116.272556,40.054792,116.272351,40.054761", "116.272351,40.054761,116.27117,40.054584,116.270993,40.054558", "116.270993,40.054558,116.270899,40.054546", "116.270899,40.054546,116.270576,40.054508,116.269978,40.054437", "116.269978,40.054437,116.269478,40.054378", "116.269478,40.054378,116.268338,40.054243", "116.268338,40.054243,116.267004,40.054128", "116.267004,40.054128,116.265485,40.053998,116.265115,40.05396", "116.265115,40.05396,116.264884,40.053935,116.26486,40.05393,116.264597,40.053878"]
}];

datas.forEach(data => {
    new Thumbnail(data)
});