'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
App.controller('library-controller', function ($scope, $http) {


        //$http.get('scripts/mock_data/materials_mock_data.json').success(function(data) {
        //        $scope.materials = data;
        //    console.log(data)
        //}).error(function(data, status, headers, config) {
        //        console.log('error');
        //});


    $scope.materials = [
            {"id":1,"name":"GLYCERIN","desc":"Cl skl w oth fx-mod coma","color":"#4d8d2b","type":"Orange"},
            {"id":2,"name":"Terazosin Hydrochloride","desc":"Opn cortx contus-concuss","color":"#4cf419","type":"Pink"},
            {"id":3,"name":"Pravastatin Sodium","desc":"Gangosa","color":"#ca1054","type":"Mauv"},
            {"id":4,"name":"Octinoxate, Oxybenzone, TItanium Dioxide","desc":"Cl skl vlt fx-concus NOS","color":"#f55dd9","type":"Blue"},
            {"id":5,"name":"Risperidone","desc":"Ob trauma NOS-postpartum","color":"#520c33","type":"Mauv"},
            {"id":6,"name":"Avobenzone, Octinoxate","desc":"Constrictiv pericarditis","color":"#4546c5","type":"Pink"},
            {"id":7,"name":"Acetaminophen and Diphenhydramine Hydrochloride","desc":"Factitious dis w symptom","color":"#2584c1","type":"Pink"},
            {"id":8,"name":"Pyrithione Zinc","desc":"Climact arthritis-up/arm","color":"#fa2475","type":"Crimson"},
            {"id":9,"name":"Titanium Dioxide","desc":"Ovarian hyperfunc NEC","color":"#3eda83","type":"Pink"},
            {"id":10,"name":"Fluoxetine Hydrochloride","desc":"TB periph lymph-cult dx","color":"#fa6244","type":"Red"},
            {"id":11,"name":"Glyburide","desc":"Schizo NOS-chr/exacerb","color":"#4169cf","type":"Mauv"},
            {"id":12,"name":"Camphor, Menthol","desc":"Blister foot \u0026 toe-infec","color":"#54cc89","type":"Turquoise"},
            {"id":13,"name":"Sodium Fluoride","desc":"Pica","color":"#2c2d27","type":"Turquoise"},
            {"id":14,"name":"TERAZOSIN HYDROCHLORIDE","desc":"Oth/uns inf-cen ven cath","color":"#2bb6e2","type":"Puce"},
            {"id":15,"name":"mupirocin calcium","desc":"Tietze's disease","color":"#1738b9","type":"Purple"},
            {"id":16,"name":"Carisoprodol","desc":"Osteoarthro NOS-oth site","color":"#faf66a","type":"Yellow"},
            {"id":17,"name":"Antihemophilic Factor, Human Recombinant","desc":"Hepatic infarction","color":"#14082e","type":"Purple"},
            {"id":18,"name":"Eucalyptol, menthol, methyl salicylate, thymol","desc":"Acc poison-heroin","color":"#f24c7e","type":"Pink"},
            {"id":19,"name":"haloperidol","desc":"Polyhydramnios-unspec","color":"#b20589","type":"Pink"},
            {"id":20,"name":"Sodium Chloride","desc":"Bartonellosis","color":"#d075ff","type":"Pink"},
            {"id":21,"name":"Acetaminophen","desc":"Plague NOS","color":"#3f9699","type":"Yellow"},
            {"id":22,"name":"CHLORHEXIDINE GLUCONATE, ETHYL ALCOHOL","desc":"Torsion appy epididymis","color":"#402235","type":"Yellow"},
        ];
    $scope.types = $scope.materials;


});
