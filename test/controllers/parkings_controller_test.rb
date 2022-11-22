require "test_helper"

class ParkingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @parking = parkings(:one)
  end

  test "should get index" do
    get parkings_url
    assert_response :success
  end

  test "should get new" do
    get new_parking_url
    assert_response :success
  end

  test "should create parking" do
    assert_difference("Parking.count") do
      post parkings_url, params: { parking: { carmake: @parking.carmake, carmodel: @parking.carmodel, carplate: @parking.carplate, cartrim: @parking.cartrim, carvin: @parking.carvin, caryear: @parking.caryear, checkinatt: @parking.checkinatt, checkintime: @parking.checkintime, checkoutatt: @parking.checkoutatt, checkouttime: @parking.checkouttime, clientaddress: @parking.clientaddress, clientname: @parking.clientname, clientphone: @parking.clientphone, facilityaddress: @parking.facilityaddress, facilityname: @parking.facilityname, facilityspot: @parking.facilityspot } }
    end

    assert_redirected_to parking_url(Parking.last)
  end

  test "should show parking" do
    get parking_url(@parking)
    assert_response :success
  end

  test "should get edit" do
    get edit_parking_url(@parking)
    assert_response :success
  end

  test "should update parking" do
    patch parking_url(@parking), params: { parking: { carmake: @parking.carmake, carmodel: @parking.carmodel, carplate: @parking.carplate, cartrim: @parking.cartrim, carvin: @parking.carvin, caryear: @parking.caryear, checkinatt: @parking.checkinatt, checkintime: @parking.checkintime, checkoutatt: @parking.checkoutatt, checkouttime: @parking.checkouttime, clientaddress: @parking.clientaddress, clientname: @parking.clientname, clientphone: @parking.clientphone, facilityaddress: @parking.facilityaddress, facilityname: @parking.facilityname, facilityspot: @parking.facilityspot } }
    assert_redirected_to parking_url(@parking)
  end

  test "should destroy parking" do
    assert_difference("Parking.count", -1) do
      delete parking_url(@parking)
    end

    assert_redirected_to parkings_url
  end
end
