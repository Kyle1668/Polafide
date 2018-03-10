require 'httparty'
require 'json'

class Api::PlacesController < ApplicationController

    def index
        if params[:loc] != ''
            request_url =  build_request_url(params[:loc])
            json_responce = get_request_data(request_url)
            places_array = build_places_array(json_responce)

            api_responce = {
                'resultsCount' => places_array.length,
                'results' => places_array
            }

            render json: api_responce
        end
    end

    def build_request_url(location)
        key = '&key=AIzaSyC_KZyErDtZ42CuFscO2l5YseWaV8MCHrQ&sensor=false'
        query = 'query=vegan+vegetarian+restaurant+near' + location

        request = '/maps/api/place/textsearch/json?'
        {
            'site' => 'https://maps.googleapis.com',
            'request' => request + query + key
        }
    end

    def get_request_data(request_url)
        url = request_url['site'] + request_url['request']
        response = HTTParty.get(url)
        parsed_responce = response.parsed_response['results']

        for place in parsed_responce
            puts place['name']
        end

        response.parsed_response['results']
    end

    def build_places_array(json_responce)
        places_array = []

        for place in json_responce
            new_place = Place.new()
            new_place.name = place['name']
            new_place.address = place['formatted_address']
            
            if place['photos']
                new_place.image_url = get_photo(place['photos'][0]['photo_reference'].to_s)
            else
                new_place.image_url = 'https://cdn.touchbistro.com/wp-content/uploads/2017/08/hub-icon-1.png'
            end

            if place['opening_hours']
                new_place.is_open = place['opening_hours']['open_now'].to_boolean
            else
                new_place.is_open = nil
            end 
            
            new_place.place_id = place['place_id']
            new_place.rating = place['rating']
            new_place.types = place['types'][0]
            places_array.push(new_place)
        end

        places_array

    end

    def get_photo(reference)
        key = '&key=AIzaSyC_KZyErDtZ42CuFscO2l5YseWaV8MCHrQ'
        request = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference='
        request + reference + key
    end

end
