# Project Rest-Rant

Rest- Rant will be an app where users will be able to review and rave about their favorite restaurants from all over!!

## Project routes

| Method  | Path | Purpose |
| ------------ | ------------- | ------------ |
| GET | / | Home Page|
| GET | /places| Places index page|
| POST | /places| Create new Path|
| GET | /places/new | Form page for creating a new place |
| GET | /places:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place|
| DELETE| /places/:id | Delete a particular place |
| GET | * | 404 page(Matches any route not defined above)|


### How places are defined
name(string)
city(string)
state(string)
cuisines(string)
and a picture (url string) 
