class CreateParkings < ActiveRecord::Migration[7.0]
  def change
    create_table :parkings do |t|
      t.string :clientname
      t.string :clientaddress
      t.string :clientphone
      t.string :carvin
      t.string :caryear
      t.string :carmake
      t.string :carmodel
      t.string :cartrim
      t.string :carplate
      t.datetime :checkintime
      t.datetime :checkouttime
      t.string :checkinatt
      t.string :checkoutatt
      t.string :facilityspot
      t.string :facilityname
      t.string :facilityaddress

      t.timestamps
    end
  end
end
