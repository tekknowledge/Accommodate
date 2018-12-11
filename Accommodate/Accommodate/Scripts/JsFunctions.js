var jsFunctions = jsFunctions || {};

(function ($, window, jsFunctions) {

    jsFunctions.isFunction = function(object) {
        if (object === undefined)
            return false;
        if (object == null)
            return false;
        return typeof object == "function";
    };

    jsFunctions.arrayContains = function (array, lookup, caseSensitive) {
        for (var i = 0; i < array.length; i++) {
            var field = array[i];
            if (!caseSensitive && typeof field == "string" && typeof lookup == "string") {
                field = field.toLowerCase();
                lookup = field.toLowerCase();
            }
            if (field == lookup)
                return true;
        }
    }

    jsFunctions.getLiteralFromLocalStorage = function (key) {
        var data;

        if (typeof (Storage) !== undefined) {
            data = localStorage.getItem(key);
        }

        return data;
    }

    jsFunctions.getObjectFromLocalStorage = function (key) {
        var data; 

        if (typeof (Storage) !== undefined) {
            data = localStorage.getItem(key);
        }

        return JSON.parse(data);
    }


    jsFunctions.setLiteralLocalStorage = function (key, data) {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem(key, data);
        }
    }

    jsFunctions.setObjectLocalStorage = function (key, data) {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
})($, window, jsFunctions)