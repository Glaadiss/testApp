class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :rate
      t.integer :user_id
      t.string :type

      t.timestamps null: false
    end
  end
end
