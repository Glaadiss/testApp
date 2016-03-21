require 'active_support/concern'

module Defaultable
  extend ActiveSupport::Concern

  included do
    before_save :set_name
	scope :young, -> (val){ where('age < ?', val).select("name, age, surname, id") }

  end

  def set_name
	  self.name = "Pikachu" unless self.name.present?
  end


end