json.array!(@pets) do |pet|
  json.extract! pet, :id, :name, :rate, :user_id, :type
  json.url pet_url(pet, format: :json)
end
