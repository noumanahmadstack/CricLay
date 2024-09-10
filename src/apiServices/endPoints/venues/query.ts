export const createVenueMutation: string = `mutation createVenue(
    $title: String!,
    $subTitle: String,
    $lat: String!,
    $long: String!,
    $fullAddress: String,
    
){
    createVenue(
        input: {
            title: $title,
            subTitle: $subTitle,
            lat: $lat,
            long: $long,
            fullAddress: $fullAddress
        }
    ){
        success,
        errors {
            field
            message
        }
        venue {
            id
        }
    }
}`;
export const getVenuesQuery: string = `query myVenues($title: String, $sub_title: String, $page: Int, $limit: Int){
  myVenues(
      title: $title,
      subTitle: $sub_title
      page: $page,
      limit: $limit
    ) {
        collection {
            id
            title
            subTitle
            lat
            long
            fullAddress
        }
        metadata {
            totalPages
            totalCount
            currentPage
            limitValue
        }
    }
}`;
