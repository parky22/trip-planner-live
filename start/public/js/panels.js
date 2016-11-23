
$('#options-panel button').on('click', function(){
  var choice = $(this).siblings('select');
  var type = choice[0].id.split('-')[0];
  // console.log(choice[0].id);
  var selected = choice.val();

  if(type === 'hotel') {
    let addedHotel = hotels.find(function(object){
      return object.name === selected
    })
    addedHotel.marker = drawMarker('hotel', addedHotel.place.location);
    hotels_It.push(addedHotel);
    $ ( '#hotel-itinerary').append(
      '<div class="itinerary-item" id="' + selected + '"><span class="title">'+ selected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button> </div>');

  }
  else if(type === 'restaurant') {
    let addedRest = restaurants.find(function(object){
      return object.name === selected
    })
    addedRest.marker = drawMarker('restaurant', addedRest.place.location);
    restaurants_It.push(addedRest);
    $ ( '#restaurant-itinerary').append(
      '<div class="itinerary-item" id="' + selected + '"><span class="title">'+ selected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button> </div>');
  }
  else if(type === 'activity') {
    let addedActivity = activities.find(function(object){
      return object.name === selected
    })
    addedActivity.marker = drawMarker('activity', addedActivity.place.location);
    activities_It.push(addedActivity);
    $ ( '#activity-itinerary').append(
      '<div class="itinerary-item" id="' + selected + '"><span class="title">'+ selected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button> </div>');
  }

});

$('#itinerary').on('click', '.remove', function() {
  let parentId = $(this).parent().attr('id');
  let groupId = $(this).parent().parent().attr('id').split('-')[0];
  if (groupId === 'hotel'){
    hotels_It = removeItin.call(this, parentId, hotels_It);
  }else if (groupId === 'restaurant'){
    restaurants_It = removeItin.call(this, parentId, restaurants_It);
  }else if (groupId === 'activity'){
    activities_It = removeItin.call(this, parentId, activities_It);
  }
})

let removeItin = function (parentId, itArr){
  let removed = itArr.find(function(object){
    return object.name === parentId;
  })
  $(this).parent().remove();
  removed.marker.setMap(null);
  return itArr.filter(function(object){
    return object.name !== parentId;
  })
}

$('.day-buttons').on('click', function(){

});