function generateCalendar (eventData) {
  monthNames = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sept", "Oct", "Nov", "Dec"]
  weekdays   = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  months = []

  $.each(eventData, function(i, event){
    eventStartDate = new Date(event.startdate)
    eventMonthName = monthNames[eventStartDate.getMonth()]

    // If table for this month doesn't exist
    if( months.indexOf(eventMonthName) < 0 ) {
      months.push(eventMonthName)
      generateMonthTable(eventStartDate)
    }
    $('#' + formattedDate(eventStartDate)).append('<div class="event"><a target="_blank" href="' + event.tickets + '">' + event.name + '</a></div>')

  })
}

function generateMonthTable( date ) {
  monthTable     = $('<table cellspacing=0 id="month-' + date.getMonth() + '">')
  monthTableBody = monthTable.append('<tbody>')
  firstDay       = new Date(date.getFullYear(), date.getMonth(), 1)
  numberOfDays   = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  weekDayNumber  = firstDay.getDay()

  $('body').append(monthTable)
  monthTable.before('<h1>' + eventMonthName + '</h1>')

  // Add month calendar header
  monthTableBody.append('<tr class="header"></tr>')
  headerRow = monthTableBody.find('.header')
  loopForTimes( 7, function(i) {
    headerRow.append('<td>' + weekdays[i] + '</td>')
  })

  // Add empty days from previous month
  loopForTimes( weekDayNumber - 1, function() {
    getFirstAvailableRow(monthTable).append('<td class="empty"></td>')
  })

  // Filling the month with days
  loopForTimes( numberOfDays, function(daynumber) {
    thisDay = new Date(date.getFullYear(), date.getMonth(), (daynumber + 1))
    id = formattedDate(thisDay)
    getFirstAvailableRow(monthTableBody).append('<td id=' + id + '><div class=day>'+ (daynumber + 1) +'</div></td>')
  })

  // Add empty days from next month
  lastRow = monthTable.find('tr:last')
  cellsInLastRow = lastRow.find('td').length
  // Check if this is necessary
  if( cellsInLastRow < 7 ) {
    loopForTimes( (7 - cellsInLastRow), function() {
      lastRow.append('<td class="empty"></td>')
    })
  }

}

// Because I don't like ot write for()
function loopForTimes( times, callback ) {
  for( var i=0; i < times; i++ ){
    callback(i)
  }
}

// This is handy: getting the first row with available cell space
function getFirstAvailableRow( table ) {
  row = table.find('tr.days').filter(function(i, thisRow) {
    return ($(thisRow).find('td').length) < 7
  })
  // If no available row, create a new one
  if( row.length == 0 ) {
    table.append('<tr class=days>')
    row = table.find('tr').last()
  }
  return row
}

// Create an unique date string for cell lookup
function formattedDate( date ) {
  return monthNames[date.getMonth()] + '-' + date.getDate()
}
