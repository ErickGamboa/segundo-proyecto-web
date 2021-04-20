var ride_name = document.querySelector("[data-input=\"ridename\"]")

var star_ride = document.querySelector("[data-input=\"ridestar\"]")

var end_ride = document.querySelector("[data-input=\"rideend\"]")

var descript_ride = document.querySelector("[data-input=\"ridedescription\"]")

var departure_ride = document.querySelector("[data-input=\"ridedepar\"]")

var estimate_ride = document.querySelector("[data-input=\"rideestimate\"]")

var monday = document.querySelector("[data-input=\"ridemonday\"]")

var tuesday = document.querySelector("[data-input=\"ridetuesday\"]")

var wednesday = document.querySelector("[data-input=\"ridewednesday\"]")

var Thursday = document.querySelector("[data-input=\"ridethursday\"]")

var friday = document.querySelector("[data-input=\"ridefriday\"]")

var saturday = document.querySelector("[data-input=\"ridesaturday\"]")

var sunday = document.querySelector("[data-input=\"ridesunday\"]")

var add_btn = document.querySelector("[data-save-btn]")



function create_ride () {

    //TODO: validate all inputs
    var ride ={
        ride_name: ride_name.value,
        star_ride: star_ride.value,
        end_ride: end_ride.value,
        descript_ride: descript_ride.value,
        departure_ride: departure_ride.value,
        estimate_ride: estimate_ride.value,
        monday: monday.value,
        tuesday: tuesday.value,
        wednesday: wednesday.value,
        Thursday: Thursday.value,
        friday: friday.value,
        saturday: saturday.value,
        sunday: sunday.value,
        
    }
    var all_rides = JSON.parse(localStorage.getItem("rides")) || [];
    all_rides.push(ride)
    localStorage.setItem("rides", JSON.stringify(all_rides))
}
add_btn.onclick = create_ride


