class User < ActiveRecord::Base
  include Defaultable
  has_many :pets
end
