require "application_system_test_case"

class ParkingsTest < ApplicationSystemTestCase
  setup do
    @parking = parkings(:one)
  end

  test "visiting the index" do
    visit parkings_url
    assert_selector "h1", text: "Parkings"
  end

  test "should create parking" do
    visit parkings_url
    click_on "New parking"

    fill_in "Carmake", with: @parking.carmake
    fill_in "Carmodel", with: @parking.carmodel
    fill_in "Carplate", with: @parking.carplate
    fill_in "Cartrim", with: @parking.cartrim
    fill_in "Carvin", with: @parking.carvin
    fill_in "Caryear", with: @parking.caryear
    fill_in "Checkinatt", with: @parking.checkinatt
    fill_in "Checkintime", with: @parking.checkintime
    fill_in "Checkoutatt", with: @parking.checkoutatt
    fill_in "Checkouttime", with: @parking.checkouttime
    fill_in "Clientaddress", with: @parking.clientaddress
    fill_in "Clientname", with: @parking.clientname
    fill_in "Clientphone", with: @parking.clientphone
    fill_in "Facilityaddress", with: @parking.facilityaddress
    fill_in "Facilityname", with: @parking.facilityname
    fill_in "Facilityspot", with: @parking.facilityspot
    click_on "Create Parking"

    assert_text "Parking was successfully created"
    click_on "Back"
  end

  test "should update Parking" do
    visit parking_url(@parking)
    click_on "Edit this parking", match: :first

    fill_in "Carmake", with: @parking.carmake
    fill_in "Carmodel", with: @parking.carmodel
    fill_in "Carplate", with: @parking.carplate
    fill_in "Cartrim", with: @parking.cartrim
    fill_in "Carvin", with: @parking.carvin
    fill_in "Caryear", with: @parking.caryear
    fill_in "Checkinatt", with: @parking.checkinatt
    fill_in "Checkintime", with: @parking.checkintime
    fill_in "Checkoutatt", with: @parking.checkoutatt
    fill_in "Checkouttime", with: @parking.checkouttime
    fill_in "Clientaddress", with: @parking.clientaddress
    fill_in "Clientname", with: @parking.clientname
    fill_in "Clientphone", with: @parking.clientphone
    fill_in "Facilityaddress", with: @parking.facilityaddress
    fill_in "Facilityname", with: @parking.facilityname
    fill_in "Facilityspot", with: @parking.facilityspot
    click_on "Update Parking"

    assert_text "Parking was successfully updated"
    click_on "Back"
  end

  test "should destroy Parking" do
    visit parking_url(@parking)
    click_on "Destroy this parking", match: :first

    assert_text "Parking was successfully destroyed"
  end
end
