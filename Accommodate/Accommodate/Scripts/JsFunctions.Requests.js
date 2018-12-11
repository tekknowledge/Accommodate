var jsFunctions = jsFunctions || {};

(function ($, window, jsFunctions) {
    jsFunctions.requests = {};

    var contentTypes = {
        "json": "application/json",
        "html": "text/html"
    };

    var dataTypes = {
        "json": "json",
        "html": "html"
    };

    function sendSynchronous(data, url, contentType, method, headers) {
        var response = {};
        var requestData = contentType == "json" ? JSON.stringify(data)
            : data;

        $.ajax({
            async: false,
            contentType: contentTypes[contentType],
            dataType: dataTypes[contentType],
            data: requestData,
            url: url,
            method: method,
            success: function (result) {
                response = result;
            },
            error: function (xhr, status, error) {
                window.alert(error);
            },
            beforeSend: function (xhr) {
                for (property in headers) {
                    if (headers.hasOwnProperty(property)) {
                        xhr.setRequestHeader(property, headers[property]);
                    }
                }
            }
        });

        return response;
    }

    function sendAsync(data, url, contentType, method, success, failure) {
        var successFunction = jsFunctions.isFunction(success) ? success :
            function (result) {
                response = result;
        };

        var failureFunction = jsFunctions.isFunction(failure) ? failure :
            function (xhr, status, error) {
                window.alert(error);
        };

        return $.ajax({
            async: true,
            contentType: contentTypes[contentType],
            dataType: dataTypes[contentType],
            data: requestData,
            url: url,
            method: method,
            success: successFunction,
            error: failureFunction
        });
    }


	//#region Public Methods

    jsFunctions.requests.post = function (data, url, contentType, headers) {
        return sendSynchronous(data, url, contentType, "POST");
    }

    jsFunctions.requests.get = function (data, url, contentType, headers) {
        return sendSynchronous(data, url, contentType, "GET", headers);
    }

    jsFunctions.requests.put = function (data, url, contentType, headers) {
        return sendSynchronous(data, url, contentType, "PUT");
    }

    jsFunctions.requests.delete = function (data, url, contentType, headers) {
        return sendSynchronous(data, url, contentType, "DELETE");
    }

    jsFunctions.requests.postAsync = function () {
        return sendAsync(data, url, contentType, "POST");
    }

    jsFunctions.requests.getAsync = function () {
        return getAsync(data, url, contentType, "GET");
    }

    jsFunctions.requests.putAsync = function () {
        return putAsync(data, url, contentType, "PUT");
    }

    jsFunctions.requests.deleteAsync = function () {
        return deleteAsync(data, url, contentType, "DELETE");
    }

	//#endregion

})($, window, jsFunctions);