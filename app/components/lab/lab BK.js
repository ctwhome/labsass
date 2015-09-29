

$scope.remove = function (scope) {
    scope.remove();
};

$scope.toggle = function (scope) {
    scope.toggle();
};

$scope.newSubItem = function (scope) {

    // Create node in main node
    if (!scope) {
        var node = {
            "id": 1,
            "type": "element",
            "title": "Node in the main!!",
            "nodes": []
        }
        $scope.llqtemplate.push(node);
    }

    //insert node from the an internal node
    else {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
        });
    }
};


$scope.newSeqContainer = function (scope) {


    var nodeData = scope.$modelValue;
    console.log("nodes: ", nodeData);

    // Add the node
    nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
    });

    //create placeholder

    nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: 'placeholder',
        nodes: []
    });


    //$scope.newSubItem(scope);

}

/**
 * Add new container
 * @param isSequential {boolean}
 * @param scope
 */
$scope.newContainer = function (isSequential, scope) {

    // Create node in main node
    if (!scope) {
        var node = {
            "id": 1,
            "type": "container",
            "isSequential": isSequential,
            "title": "New container. Sequential: " + isSequential,
            "nodes": []
        }
        $scope.template.push(node);
    }

    //insert node from the an internal node
    else {
        var nodeData = scope.$modelValue;
        // Add the node
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
        });
    }
}

$scope.treee = [

    //{
    //    'id': 1,
    //    'title': 'tree1 - item1',
    //    'nodes': []
    //},
    //{
    //    'id': 2,
    //    'title': 'tree1 - item2',
    //    'nodes': [
    //
    //        {
    //            titleTree: 'Placeholder',
    //            nodes: []
    //        },
    //        {
    //            'id': 1,
    //            'title': 'subtree1.1 - item1',
    //            'nodes': []
    //        },
    //        {
    //            'id': 2,
    //            'title': 'subtree1.2 - item2',
    //            'nodes': []
    //        }
    //
    //    ]
    //}
]

$scope.llqtemplate =
{
    //Preferences for the main template / tree
    title: "Main template",
    isSequential: false,
    mainContainer: [
        {
            title: "Link 1",
            type: "link",
        }, {
            title: "Classroom Session 1",
            type: "classroom",
        }, {
            title: "NON Sequential container",
            type: "container",
            isSequential: false,
            nodes: [
                {
                    title: "Classroom Session 1",
                    type: "classroom",
                }, {
                    columnName: "placeholder",
                    title: "Placeholder",
                    nodes: []
                }
            ]
        }

    ]
}

//{
//    columnName: 'placeholder',
//    nodes: []
//}

//============================================================================

//
//$scope.list = [{
//    "id": 1,
//    "title": "1. dragon-breath",
//    "mainName": "Main container template",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": []
//}, {
//    "id": 2,
//    "title": "2. moiré-vision",
//    "name": "Name",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": [{
//        "id": 21,
//        "title": "2.1. tofu-animation",
//        "name": "Name",
//        "icon": "assets/images/material-icon.png",
//        "number": 4,
//        "props": {
//            "color": "green",
//            "isSecuential": true
//        },
//        "items": [{
//            "id": 211,
//            "title": "2.1.1. spooky-giraffe",
//            "name": "Name",
//            "icon": "assets/images/material-icon.png",
//            "number": 4,
//            "props": {
//                "color": "green",
//                "isSecuential": true
//            },
//            "items": []
//        }, {
//            "id": 212,
//            "title": "2.1.2. bubble-burst",
//            "name": "Name",
//            "icon": "assets/images/material-icon.png",
//            "number": 4,
//            "props": {
//                "color": "green",
//                "isSecuential": true
//            },
//            "items": []
//        }],
//    }, {
//        "id": 22,
//        "title": "2.2. barehand-atomsplitting",
//        "name": "Name",
//        "icon": "assets/images/material-icon.png",
//        "number": 4,
//        "props": {
//            "color": "green",
//            "isSecuential": true
//        },
//        "items": []
//    }],
//}, {
//    "id": 3,
//    "title": "3. unicorn-zapper",
//    "name": "Name",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": []
//}, {
//    "id": 4,
//    "title": "4. romantic-transclusion",
//    "name": "Name",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": []
//}];
//
//
//$scope.selectedItem = {};
//
//$scope.options = {
//};
//
//$scope.remove = function(scope) {
//    scope.remove();
//};
//
//$scope.toggle = function(scope) {
//    scope.toggle();
//};
//
//$scope.newSubItem = function(scope) {
//    var nodeData = scope.$modelValue;
//    nodeData.items.push({
//        id: nodeData.id * 10 + nodeData.items.length,
//        title: nodeData.title + '.' + (nodeData.items.length + 1),
//        items: []
//    });
//};


var containers = {
    "mainName": "Main container template",
    "icon": "assets/images/material-icon.png",
    "number": 4,
    "props": {
        "color": "green",
        "isSecuential": true
    },
    "items": [{
        "name": "Container 1",
        "icon": "assets/images/material-icon.png",
        "number": 6,
        "type": "container",
        "props": {
            "color": "blue",
            "isSecuential": true,
            "isCollapsed": true
        },


    },

        {
            "name": "Container 2",
            "icon": "assets/images/material-icon.png",
            "number": 6,
            "type": "container",
            "props": {
                "color": "blue",
                "isSecuential": true,
                "isCollapsed": true
            }
        },
        {
            "name": "Container 2",
            "icon": "assets/images/material-icon.png",
            "number": 6,
            "type": "container",
            "props": {
                "color": "blue",
                "isSecuential": true,
                "isCollapsed": true
            },
            "items": [{
                "name": "Container 2",
                "icon": "assets/images/material-icon.png",
                "number": 6,
                "type": "container",
                "props": {
                    "color": "blue",
                    "isSecuential": true,
                    "isCollapsed": true
                },
                "items": [{
                    "name": "Container 2",
                    "icon": "assets/images/material-icon.png",
                    "number": 6,
                    "type": "container",
                    "props": {
                        "color": "blue",
                        "isSecuential": true,
                        "isCollapsed": true
                    }
                }]
            }]
        }
    ]
};
$scope.containers = containers;