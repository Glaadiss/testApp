require 'rails_helper'

RSpec.describe "pets/new", type: :view do
  before(:each) do
    assign(:pet, Pet.new(
      :name => "MyString",
      :rate => 1,
      :user_id => 1,
      :type => ""
    ))
  end

  it "renders new pet form" do
    render

    assert_select "form[action=?][method=?]", pets_path, "post" do

      assert_select "input#pet_name[name=?]", "pet[name]"

      assert_select "input#pet_rate[name=?]", "pet[rate]"

      assert_select "input#pet_user_id[name=?]", "pet[user_id]"

      assert_select "input#pet_type[name=?]", "pet[type]"
    end
  end
end
