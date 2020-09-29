import moment from 'moment';


export const prepateEvents = (events = []) => {

    return events.map(
        (e) => ({
            ...e,
            end: moment(e.end).toDate(), //Asi mi end y mi start dejan de ser stirgn y pasar a ase objetos tipo date 
            start: moment(e.start).toDate(),
        })
    )

}