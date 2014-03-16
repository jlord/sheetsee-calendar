window.myData = function (data) {
  monthNames = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sept", "Oct", "Nov", "Dec"]
  weekdays   = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  months = []

  $.each(data, function(i, event){
    date = new Date(event.startdate)
    month = monthNames[date.getMonth()]

    monthTable = $('<table id="month-' + date.getMonth() + '">')

    if( months.indexOf(month) < 0 ) {
      months.push(month)
      setDates(monthTable, date)

      $('body').append(monthTable)
    }
    console.log('#' + formattedDate(date))
    $('#' + formattedDate(date)).append('<br/>event on this day')

  })
}

var setDates = function( monthTable, date ) {
  // month = monthTable.data('month')
  monthTableBody = monthTable.append('<tbody>')
  firstDay       = new Date(date.getFullYear(), date.getMonth(), 1)
  numberOfDays   = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  // console.log(days)
  weekDayNumber  = firstDay.getDay()

  monthTableBody.append('<tr class="weekdays"></tr>')
  weekdaysRow = monthTableBody.find('.weekdays')
  doThisManyTimes( 7, function(i) {
    weekdaysRow.append('<td>' + weekdays[i] + '</td>')
  })

  // Add empty days
  doThisManyTimes( weekDayNumber - 1, function() {
    getFirstEmptyRow(monthTable).append('<td class="empty"></td>')
  })

  // Filling the month with days
  doThisManyTimes( numberOfDays, function(daynumber) {
    thisDay = new Date(date.getFullYear(), date.getMonth(), (daynumber + 1))
    id = formattedDate(thisDay)
    getFirstEmptyRow(monthTableBody).append('<td id=' + id + '>'+ (daynumber + 1) +'</td>')
  })

  // Add empties
  lastRow = monthTable.find('tr:last')
  cellsInLastRow = lastRow.find('td').length
  if( cellsInLastRow < 7 ) {
    doThisManyTimes( (7 - cellsInLastRow), function() {
      lastRow.append('<td class="empty"></td>')
    })
  }

}

var doThisManyTimes = function( times, callback ) {
  for( var i=0; i < times; i++ ){
    callback(i)
  }
}

var getFirstEmptyRow = function( table ) {
  row = table.find('tr.days').filter(function(i, thisRow) {
    return ($(thisRow).find('td').length) < 7
  })
  if( row.length == 0 ) {
    table.append('<tr class=days>')
    row = table.find('tr').last()
  }
  return row
}

var formattedDate = function( date ) {
  return monthNames[date.getMonth()] + '-' + date.getDate()
}
