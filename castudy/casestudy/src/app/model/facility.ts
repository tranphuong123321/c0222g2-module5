export interface Facility {
  // Tên dịch vụ, Diện tích sử dụng, Chi phí thuê, Số lượng người tối đa, Kiểu thuê (bao gồm thuê theo năm, tháng, ngày, giờ).
// •	Riêng Villa sẽ có thêm thông tin: Tiêu chuẩn phòng, Mô tả tiện nghi khác, Diện tích hồ bơi, Số tầng.
// •	Riêng House sẽ có thêm thông tin: Tiêu chuẩn phòng, Mô tả tiện nghi khác, Số tầng.
// •	Riêng Phòng sẽ có thêm thông tin: Dịch vụ miễn phí đi kèm.

  id: string;
  name: string;
  area: string;
  cost: string;
  maxPeople: string;
  rentType: string;
  romStandard: string;
  otherAamenities: string;
  poolArea: string;
  numberFloors: string;
  freeServiceIncluded: string;
  img: string;
}
