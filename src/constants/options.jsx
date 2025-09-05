export const SelectTravelList = [
  {
    id: 1,
    title: 'Just Me',
    desc: "A solo mission for some well-deserved me-time",
    icon: '🚶‍♂️',
    people: '1',
  },
  {
    id: 2,
    title: 'Couple',
    desc: "Two hearts, one adventure",
    icon: '👥',
    people: '2',
  },
  {
    id: 3,
    title: 'Family',
    desc: "Big laughs, bigger memories",
    icon: '🏡',
    people: '3 to 5 people',
  },
  {
    id: 4,
    title: 'Friends',
    desc: "The more the merrier — chaos guaranteed",
    icon: '👩‍👩‍👦‍👦',
    people: '5 to 12 people',
  },
]

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: "Save your cash for souvenirs and street food",
    icon: '💵',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: "A comfy balance — not too fancy, not too frugal",
    icon: '💰',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: "Because why not treat yourself like royalty?",
    icon: '💎',
  },
]



export const AI_PROMPT='Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName,Hotel address,Price, hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName,Place Details,Place Image Url, Geo Coordinates,ticket Pricing,rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.'