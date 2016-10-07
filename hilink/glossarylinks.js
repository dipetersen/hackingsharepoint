<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<script src="/sites/dev/siteassets/js/jquery.hilink.js" charset="utf-8"></script>


<div id="mymodal" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 id="bs-modal-title" class="modal-title">Modal title</h4>
      </div>
      <div id="bs-modal-body" class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<style>
      .hl {
        text-decoration: underline;
        color: black;
        background-color: yellow;
        cursor: pointer;
      }
</style>
<script type="text/javascript">
      var glossary = {};
      function TermClicked(term) {
        $("#bs-modal-title").html(term);
        for(x=0; x<glossary.length; x++){
          if(glossary[x].Title === term) {
            $("#bs-modal-body").html(glossary[x].Definition);
            break;
          }
        }
        $("#mymodal").modal('toggle');
      }

      $(document).ready(function(){
        // this line checks to see if the page is in edit mode and returns without executing if it is.
      	if(document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value === "1")
    		{
    			return true;
    		}
/*
    var data = { "d": { "results": [
        {"Title":"Lorem", "Description":"Description for Lorem"},
        {"Title":"elit", "Description":"description for elit"},
        {"Title":"dolor", "Description":"description for dolor"},
        {"Title":"consectetur", "Description":"description for mollit"},
        {"Title": "Veniam", "Description":"description for Veniam"}
      ]}};
*/
        var siteurl = _spPageContextInfo.webAbsoluteUrl;
        var listname = "Glossary";
        $.ajax({
          url: siteurl + "/_api/web/lists/getbytitle('"+listname+"')/items",
          method: "GET",
          headers: {"Accept": "application/json; odata=verbose"},
          success: function(data){
            glossary = data.d.results;
            $(document).hilink({
              terms: data.d.results,
              matchField:"Title",
              description: "Definition",
              node: $("#DeltaPlaceHolderMain"),
              hiliteClass: "hl",
              clickFunction: TermClicked
            });
          },
          error: function(data){
            console.log("Error retrieving data from list.");
          }
        });
      })


</script>
