function create(k, c, iu) {

    var baseUrl = 'https://s3-eu-west-1.amazonaws.com/learning-hub/'

    return {
        keyword: k,
        courseUrl: c,
        imageUrl: baseUrl.concat(iu),

        isSearchTermIncluded: function(term) {
            return this.keyword.find(function(t){
                return t.toLowerCase() === term.toLowerCase();
            }) !== undefined;
        }
    }
}

var analytics = {
    SearchTerm: 'Secretary'
}

var teachingAssistant = create(['teaching assistant', 'childcare provider', 'support worker'], 
                        'https://courses.totaljobs.com/course,teaching-assistant-level-2,7726.html?entryUrl=%2Fsearch-courses.html%3Fwhat%3Doplex%26page%3D2%26position%3D3',
                        '835x180Oplex-TeachingAssistant.png');

var bookkeeping = create(['bookkeeper', 'secretary', 'credit controller', 'finance assistant', 'credit control', 'purchase ledger clerk'], 
                        'https://courses.totaljobs.com/course,aat-foundation-certificate-in-bookkeeping,908.html?entryUrl=%2Fsearch-courses.html%3Fcompany%255B0%255D%3D5%26position%3D3&companyUrl=%2Fproviders.html',
                        '835x180ICS-FoundationBookkeeping.png');

var accountant = create(['accounts assistant', 'assistant accountant', 'accounts administrator', 'finance administrator'], 
                        ' https://courses.totaljobs.com/course,aat-advanced-diploma-in-accounting-level-3,910.html',
                        '835x180ICS-AATLevel 3.png');

var searchTerms = [teachingAssistant, bookkeeping]

var found = searchTerms.find(function(obj){
    return obj.isSearchTermIncluded(analytics.SearchTerm)
});

console.log(found)

if (found !== undefined) {
    $('.col-xs-12.job-results.clearfix')
                            .children(':eq(7)')
                            .after('<div style="padding:0" class="job"><a target="_blank" href="'.concat(found.courseUrl).concat('"><img style="max-width:100%" align="middle" src="').concat(found.imageUrl).concat('"/></a></div>'));
}

// TODO: tomorrow put it in Tealium 