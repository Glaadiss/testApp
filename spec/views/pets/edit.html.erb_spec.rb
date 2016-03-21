require 'rails_helper'

RSpec.describe "pets/edit", type: :view do
  before(:each) do
    @pet = assign(:pet, Pet.create!(
      :name => "MyString",
      :rate => 1,
      :user_id => 1,
      :type => ""
    ))
  end

  it "renders the edit pet form" do
    render

    assert_select "form[action=?][method=?]", pet_path(@pet), "post" do

      assert_select "input#pet_name[name=?]", "pet[name]"

      assert_select "input#pet_rate[name=?]", "pet[rate]"

      assert_select "input#pet_user_id[name=?]", "pet[user_id]"

      assert_select "input#pet_type[name=?]", "pet[type]"
    end
  end
end
