
export default interface RecommendationProps {
  userPhotoUrl: string //  URL of linkedIn Profile Photo
  userName: string //  USer Display Name
  userRole: string //  User Role at Company
  userPosition: string //  User relative Position to self
  reviewText: string | JSX.Element //  Review Text (Full)
  dateGiven: string //  ISO Date REsponse Given
  profileUrl: string //  URL of user LinkedIn Profile
}
