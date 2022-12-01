# WhishList APP 

## Phase 1
Agenda 
- Continue work with WishList App

- [X] DONE: HTML
        - [x] form field validation for destination/location/photo
        - [x] BUG: validation error wont display
              - FIXED: used form submit event vs button submit event
              - FOLLOW-UP: why button submit event did not work originally
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
          -  after submitting, should remove title: "Enter Destination Details"
        - [ ] Refactor: 
          - HOW: rm hard code, ensure DRY, add helper methods
          - REPLACE: use regex for conditional (ln 21)

## Phase 2

Agenda: 

- Refactor and Integrate API 

- Refactor 
  - [x] carryover day 2 JS Todos 
  - [x] modularize index.js 
    - READ: [js.io modules](https://javascript.info/modules-intro)
- [ ] TODO: Research
  - [ ] TODO: JS 
    - [ ] REFACTOR: 
      - [ ] Replace: use regex for conditional (ln 21)
  - [ ] READ Javascript.io  
    - [ ] READ: [js.io fetch](https://javascript.info/fetch)
    - [x] READ: [js.io network requests](https://javascript.info/network)
  - [ ] READ: Unsplash Documentation
    - [ ] register for api access
    - [ ] access/secret key guidlines
    - [ ] base url
    - [ ] READ: [ relavent endpoint resources to be queried ](https://unsplash.com/documentation#search-photos)

- PHASE 2 REQUIREMENTS: Plan Unsplash API integration
    - [x] remove photo url field from WishList form
      - [ ] fetch RELAVENT image from Unslash API
          - using only destination/location fields
      - [ ] use that as the rendered cards image`