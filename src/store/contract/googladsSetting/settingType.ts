// this is type for setting reducer

export enum SettingType {
    CHANGE_KEYWORD = "CHANGE_KEYWORD",
    CHANGE_INCOGNITE = "CHANGE_INCOGNITE",
    CHANGE_SITE = "CHANGE_SITE",
    CHANGE_BROWSERS = "CHANGE_BROWSERS",
    CHANGE_TARGET_DELAY = "CHANGE_TARGET_DELAY",
    CHANGE_VISIT_WITHIN_PAGE = "CHANGE_VISIT_WITHIN_PAGE",
    CHANGE_MODES = "CHANGE_MODE",
    CHANGE_OPTIONS = "CHANGE_OPTIONS",
    CHANGE_VISIT_PERIOD = "CHANGE_VISIT_PERIOD",
    CHANGE_AFTER_FINISH_PERIOD = "CHANGE_AFTER_FINISH_PERIOD",
    CHANGE_AUTO_RESET_TIME = "CHANGE_AUTO_RESET_TIME",
    CHANGE_TARGET_SITE_VALUES = "CHANGE_TARGET_SITE_VALUES"
}


export enum Browser {
    FIREFOX = "Firefox",
    SAFARI = "Safari",
    CHROME = "Chrome",
    OPERA = "Opera",
    EXPLORER = "Explorer"
}

export enum Modes {
    DEVICE_RESET = "Device Reset",
    VINN_RESET = "Vinn Reset",
    PHONE_RESET = "Phone Reset",
    MOBILE_DATA = "Mobile Data",
    FLY_MODE = "Fly Mode"
}

export enum Options {
    REMOVE_COOKIES = "Remove Cookies",
    CHANGE_RESOLUTION = "Change Resolution",
    MOUSE_TRACKS = "Mouse Tracks",
    DATA_SAVING_MODE = "Data Saving Mode",
    RANDOM_GENERATE = "Random Generate",
    ANALYTICS_PROTECTION = "Analytics Protection",
    REMOVE_HISTORY = "Remove History"
}


