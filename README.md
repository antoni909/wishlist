# Tasks

## DAY 2 - Phase 1
Agenda 
- Continue work with WishList App

- [X] DONE: HTML
        - [x] form field validation for destination/location/photo
            - BUG: validation error wont display
              - RESOLVED: used form submit event vs button submit event
                -[ ] FOLLOW-UP: why button submit event did not work originally
        - [x] research header in vs out of body

- [x] DONE: CSS
        - [x] zero out default web styles
        - [x] add click/hover effects to buttons
        - [x] match as close as possible: header fonts size/family
        - [x] textarea width should not be greater than form width
        - [x] add flex to stack form element above wishlist 
        - [X] breakpoints for (used flex box)
            - dec size of form element/fields/submit(add to list) button

- [ ] TODO: JS
        - [x] conditional render of title: "My WishList"
            - after submitting, should remove title: "Enter Destination Details"
        - [ ] WIP Refactor: 
            - By: rm hard code, ensure DRY, add helper methods
            - Replace: use regex for conditional (ln 21)

## Day 3 - Phase-2

Agenda: 

- Refactor 
  - carryover day 2 JS Todos 
  - modularize index.js 
    - [js.io modules](https://javascript.info/modules-intro)

- PHASE 2 REQUIREMENTS: Plan Unsplash API integration
    - remove photo url field from WishList form
    - using only destination/location fields
      - fetch RELAVENT image from Unslash API
      - use that as the rendered cards image

- [ ] TODO: Research
  - [ ] READ Javascript.io  
      - [js.io fetch](https://javascript.info/fetch)
      - [js.io network requests](https://javascript.info/network)
  - [ ] READ Unsplash Documentation
      - register for api access
        - access/secret key guidlines
      - base url
        - [relavent endpoint resources to be queried](https://unsplash.com/documentation#search-photos)

- [ ] TODO: JS 
  - [ ] REFACTOR: 
      - rm hard code, ensure DRY, add helper methods
      - Replace: use regex for conditional (ln 21)
