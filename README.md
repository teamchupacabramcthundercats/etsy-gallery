# Halvsy Gallery

This project is a recreation of the gallery component from Etsy's item sales page.  It is being made in conjunction with my team mates on the Team Chupacabra McThundercat organization in an effort to develop our skills by recreating components from the Etsy page.  The sole purpose is to develop and showcase our skills, this component will not be used outside of that scope.

## Related Projects

  - https://github.com/teamchupacabramcthundercats/etsy-reviews
  - https://github.com/teamchupacabramcthundercats/Halvsy-Gallery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#Requirements)
1. [Installation](#Installation)

## Usage

To render the reviews component on your page, insert a div with the id "gallery" into your html where you'd like the component to render.

The server is set up to serve requests from: 
>localhost:7777/product/{some number ending in a value between 1-100}

Example: `localhost:7777/product/43`

If serving with a proxy, you'll need to proxy the routes for the API:

## GET: ‘/api/images/:productId’ 
Used to get the details object for the productId containing the product’s id, product name, a boolean value indicating if the product is marked as a favorite, and an images property that contains a collection of image objects associated with the product.  Each image object in the collection will contain three url strings that link to a full, small, and thumbnail sized version of the image.  GET requests sent to this endpoint will return an object of the following format:

```sh
{
  id: <number>,
  name: <string>,
  isFavorite: <boolean>
  Images: [
            {
              full: <string>,
              small: <string>,
              thumbnail: <string>
            },
            { … },
            ...
          ]
}
```

## PATCH: ‘/api/favorite/:productId’
Used to favorite or unfavorite the product matching the productId parameter.  PATCH requests sent to this endpoint will toggle the isFavorite property of the product.  If successful, the request will return status 200.


## Requirements
Currently deployment via Docker is the only supported deployment method.

We require: Docker v19.03.12

## Installation
From within the root directory:

```sh
docker-compose up -d
```

Once docker-compose is finished running, navigate to:
`localhost:7777/product/{some number ending in a value between 1-100}`
