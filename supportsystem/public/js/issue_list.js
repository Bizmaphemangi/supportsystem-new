frappe.listview_settings['Issue'] = {

    get_indicator: function (doc) {
        console.log("Doc Status: ", doc.status);
        
        if (doc.status === "Open") {
            return [__("Open"), "blue", "status,=,Open"];
        } else if (doc.status === "Closed") {
            return [__("Closed"), "green", "status,=,Closed"];
        } else if (doc.status === "Pending") {
            return [__("Pending"), "orange", "status,=,Pending"];
        } else if (doc.status === "In Progress") {
            return [__("In Progress"), "blue", "status,=,In Progress"];
        }
    }
};