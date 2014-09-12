define([
  'app'
], function (app) {

  // define our map controller and register it with our app
  app.controller("MapCtrl", function($scope,$http){

    // expose a method for handling clicks
    $scope.click = function(e,map) {
  
      $scope.center = [e.mapPoint.x,e.mapPoint.y];
      
      var point = e.mapPoint.x + ',' + e.mapPoint.y, 
          extent = map.extent.xmin +',' + map.extent.ymin +',' + map.extent.xmax +',' + map.extent.ymax;


      $http.get('http://arcgis5.njmeadowlands.gov/webmaps/rest/services/Online/TidegateNetwork/MapServer/identify?f=json&geometry='+point+'&tolerance=9&returnGeometry=false&mapExtent='+extent+'&imageDisplay=1280%2C629%2C96&geometryType=esriGeometryPoint&sr=102100&visible=false').success(function(data,error) {
        if(data.results[0].value != undefined) {       
          console.log(data.results[0].value);
          var attr = data.results[0].attributes,
              value = data.results[0].value,
              id,
              json;

          console.log(attr);

          if (data.results[0].value == "Rutherford Tide Gate") { 
            id = 14;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/rutherford.jpg";
          } else if (value == "Franks Creek Tide Gates") { 
            id = 15;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/frank.jpg";
          } else if (value == "East Riser Tide Gate") {
            id = 16;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/eastriser.jpg";
          } else if(value == "Peach Island Creek Tide Gate") { 
            id = 17;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/peach.jpg";
          } else if (value == "Palmer Terrace Tide Gate") {
            id = 18;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/palmer.jpg";
          } else if (value == "DePeyster Creek Pump Station and Tide Gate") {
            id = 19;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/depeyster.jpg";
          } else if (value == "Moonachie Creek Tide Gates Upper") {
            id = 20;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/moonachiecreek.jpg";
          } else if (value == "Teterboro Tide Gate and Pump Station") {
            id = 22;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/teterboro.jpg";
          } else if (value == "West Riser Tide Gate") {
            // Unncomment once monitoring is working again.
            // id = 23;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/municipal/tidegatePhotos/westriser.JPG"
          } else if (value == "Losen Slote Tide Gate and Pump Station") {
            id = 24;
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/losen.jpg";
          }  else if (value == "Harrison Avenue Tide Gate") {
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/harrisonave.jpg";
          } else if (value == "USPS Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/usps.jpg";
          } else if (value == "Bergen Avenue Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/berg.jpg";
          } else if (value == "Dead Horse Creek Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/deadhc.jpg";
          } else if (value == "Fish House Road Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/fishhouse.jpg";
          } else if (value == "Belezza Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/bele.jpg";
          } else if (value == "Golden Avenue Pump Station") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/gold.jpg";
          } else if (value == "Standard Chlorine Tide Gate") { 
            $scope.imgSrc = "null";
          } else if (value == "St.Pauls Creek Tide Gate and Pump Station") { 
            $scope.imgSrc = "null";
          } else if (value == "Sachs Creek Tide Gate") { 
            $scope.imgSrc = "null";
          } else if (value == "Route 3 West / NJDOT Tide Gate") { 
            $scope.imgSrc = "null";
          } else if (value == "Meadowlands Parkway Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/meadowp.jpg";
          } else if (value == "Meadowlands Parkway Tide Gate B") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/meadowb.jpg";
          } else if (value == "Born Street Pump Station and Tide Gate") { 
            $scope.imgSrc = "null";
          } else if (value == "River Road Tide Gate and Pump Station") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/riverroad.jpg";
          } else if (value == "Acorn Road Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/acorn.jpg";
          } else if (value == "Secaucus High School Pump Station") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/sechs.jpg";
          } else if (value == "Koelle Blvd Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/koelle.jpg";
          } else if (value == "Bashes Creek Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/bashes.jpg";
          } else if (value == "East Rutherford Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/eastruth.jpg";
          } else if (value == "Yellow Freight Tide Gate") { 
            $scope.imgSrc = "null";
          } else if (value == "Dell Road Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/dell.jpg";
          } else if (value == "Waitex Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/waitex.jpg";
          } else if (value == "Broad and 20th Street Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/broad20.jpg";
          } else if (value == "Overpeck Creek Tide Gate") { 
            $scope.imgSrc = "http://arcgis5.njmeadowlands.gov/Municipal/tidegatePhotos/overpeck.jpg";
          }
          if (id != undefined) {
            
            
            $http.get('elevations.php?id='+id).success(function(data,error) {
              console.log(data);
              $scope.date = data['timedate'];
              $scope.up = data['upstream'];
              $scope.down = data['downstream'];

            });
          } else {
             $scope.date = null;
              $scope.up = null;
              $scope.down = null;
          }

          $scope.name = data.results[0].value;
          $scope.muni = attr['MUNICIPALITY'];
          $scope.elevation = attr['ELEVATION'];
          $scope.tideNum = attr['NUMBER _OF_TIDE_GATES'];
          $scope.tideType = attr['TYPE_OF_GATE'];
          $scope.maintenance = attr['MAINTENANCE'];
          $scope.maintRec = attr['MAINTENANCEREQUIRED'];
          $scope.comments = attr['COMMENTS'];
          $scope.tidegate = attr['TIDE_GATE'];
          $scope.pump = attr['PUMP_STATION'];

          $scope.popVis = true;
         
      }

      });

    };


  });

});