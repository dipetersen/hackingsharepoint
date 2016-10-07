Welcome to HiLink
==================

> Written by David Petersen 2016  
> Contact me:  david@dipetersen.com  
> LinkedIn: http://linkedin.com/in/dpetersen  
> Twitter: @dipetersen  
> Version:  0.0.0.1-alpha  (This code is not production ready)

This is my first attempt of a jQuery plugin.  The purpose of this plugin is
to highlight words on a page that match a list supplied to it.  I
originally wrote this to highlight words in a glossary list stored
in a SharePoint list.  

Requirements:
-------------

This plugin requires jQuery.  I was using 2.2.4 when I wrote it.  I have not tested it with any other version.  
In the sample, I also use Bootstrap for styling and for the modal dialog.

Data:
-----

While I wrote this originally to use data supplied by the SharePoint REST interface, you can use any data source as long as it fits in the following format:
```
  [
    {"Title":"Lorem", "Description":"Description for Lorem"},
    {"Title":"elit", "Description":"description for elit"},
    {"Title":"dolor", "Description":"description for dolor"},
    {"Title":"consectetur", "Description":"description for consectetur"},
    {"Title": "Veniam", "Description":"description for Veniam"}
  ]
```
I implemented it by making a REST call to SharePoint and then used the data returned as the data source.  The required fields are Title and Description.

Implementation:
---------------

You can limit the matching by what jQuery selector you use.  The **hilink** plugin will search the node-tree of the selected element.  If you want to search the whole document, then use the ```$(document)``` selector as shown.

The following properties are required: 

 Property | Definition
 -------- | ---------- 
 terms    | json object Array.  Usually this is the results array returned from a REST call.
 matchField | This is the field in the JSON object that we will use to build the query string for matching
 description | this is the field that provides the definition of the term. It is used when a user clicks on the term.
 node | This is a jQuery object representing a DOM node.  we convert it to a DOM node before the matching.
 hiliteTag | tag to use to hilite.  default is EM.
 hiliteClass | this is the CSS class to assign to each matched term. 
 clickFunction | method called when clicked.  It will be passed the matched text.  function(match){}

```
var data = [
    {"Title":"Lorem", "Definition":"Description for Lorem"},
    {"Title":"elit", "Definition":"description for elit"},
    {"Title":"dolor", "Definition":"description for dolor"},
    {"Title":"consectetur", "Definition":"description for consectetur"},
    {"Title": "Veniam", "Definition":"description for Veniam"}
  ];

$(document).hilink({
              terms: data,
              matchField:"Title",
              description: "Definition",
              node: $("#DeltaPlaceHolderMain"),
              hiliteClass: "hl",
              clickFunction: TermClicked
            });
```