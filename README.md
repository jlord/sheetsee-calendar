# Sheetsee Calendar

A fork-n-go Sheetsee.js calendar project! 

![ss-cal](ss-cal.png)

**Sheetsee.js Calendar**

Sheetsee.js is a library that makes it easy to visualze data from a Google Spreadsheet. This repository expands on that by building a calendar based on events in a spreadsheet.

**Fork-n-go**

This repository contains webfiles on a branch named `gh-pages`, which means GitHub hosts them for free at: [jlord.github.io/sheetsee-calendar](jlord.github.io/sheetsee-calendar). When you fork the project to your account, you too can have a hosted site -- easy peasy! 

## Set Up

Here's how to get going with your version:

### 1. Create spreadsheet

Create a new spreadsheet for your data on Google Docs. It should contain these headers (case and order of columns do not mattter, spelling does):

```
Start Date | End Date |  Name | Location | Tickets | Contact
```

#### Dates

Your dates should be in the `mm/dd/yyyy` format. If your day is multiple days, use both the Start and End Date columns, if it's just one day, leave End Date blank.

### 2. Publish spreadsheet

In order to fetch your spreadsheet's data you'll need to click File > Publish to the Web > Start Publishing. This just means when asked for the data in the spreadsheet, Google returns it.

![publish](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)

### 3. Fork this repository

From this page, click the "Fork" button at the top right. Bam!

### 4. Add your spreadsheet key

- From your fork's page on GitHub, click to view the `index.html` file. 
- When it opens, click "Edit"

You'll see code near the bottom that looks like this:

```JAVASCRIPT
document.addEventListener('DOMContentLoaded', function() {
  var URL = "0AuOjlXjUrSbAdE1XRFJkeEJZQ1NSelhILUR0NXdBWUE"
  Tabletop.init( { key: URL, callback: generateCalendar, simpleSheet: true } )
})
```

The variable `URL` is your spreadsheet's key, which is the long set of letters and numbers in the middle of your spreadsheet's url.

- Copy and paste your spreadsheet's key in place of the existing one.
- Click "Commit changes" at the bottom of the page.

#### Ta Da!

In a few minutes you'll be able to visit your site at: yourgithubname.github.io/sheetsee-calendar.

**Pro-tip** You can click "Settings" on your fork's page and rename it to a more appropriate-to-you name than _sheetsee-calendar_ :)

## Styling

Included in this repository is a stylesheet for the calendar. You can keep the style as is or make it your own! Classes are like so:

1[css](https://f.cloud.github.com/assets/1153134/2432168/818021fc-ad57-11e3-8ff8-8b483afc2720.png)

