module Nhtsa
  def check_vin(vin_number)
    decoded_vin = check_vin_locally(vin_number)

	if decoded_vin.nil?
		decoded_vin = check_vin_nhtsa(vin_number)
	end
	
	return decoded_vin
  end


private

  def check_vin_locally(vin_number)
    #TODO: Local Database search
	#Go to Local Database (Downloaded from NHTSA) and try find the informed VIN

	#vin found return vin else nil
	
	#we have no DB now, so it will be always new. (For simplicity I am not going to download and use the database from NHTSA)
	return nil
	
  end

  def check_vin_nhtsa(vin_number)

	result = RestClient.get("https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/#{vin_number}?format=json")	
	
	json = JSON.parse(result)

	car_attr = json["Results"].first()

	#TODO: async insert record on local database or Flag a process to start (Download the new updated database)
	
	#return data
	return {
		make: car_attr["Make"],
		model: car_attr["Model"],
		year:  car_attr["ModelYear"],
		series: car_attr["Series"],
		doors:  car_attr["Doors"],
		fuel: car_attr["FuelTypePrimary"]
	}
  end


end