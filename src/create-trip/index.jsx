import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions } from "@/constants/options";





function CreateTrip() {
  const [place, setPlace] = useState();
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Your trip, but make it ✨personal✨
      </h2>
      <p className="mt-3 text-gray-700 text-xl">
        Think of this as ordering off a secret travel menu. Give us the basics,
        and our AI will serve up a plan sprinkled with surprises you’ll actually
        love. (We promise!😉)
      </p>

      <div className="mt-10 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">What's your destination?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {setPlace(v);console.log(v)}
            }}
            />

            <div>
              <h2 className="text-xl my-3 font-medium">How many days are you planning to stay?</h2>
              <Input type="number" placeholder="Example: 3" className="mt-2 selection:border-blue-600 rounded-md p-2" />
            </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What's your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
        
            {SelectBudgetOptions.map((item, index) =>(
              <div key={index} className="p-4 border rounded-lg hover:shadow-lg">
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2>{item.desc}</h2>
             
              </div>
          

        ))}
      </div>
      </div>
    </div>
    </div>
  );
}

export default CreateTrip;
