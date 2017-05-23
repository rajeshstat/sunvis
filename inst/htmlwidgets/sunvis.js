HTMLWidgets.widget({

  name: 'sunvis',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var sunburst = d2b.chartSunburst();
sunburst.chartFrame().size({height: 500});

var chart = d3.select('.sunburst-chart');

chart
		.datum({
	    label: 'root',
	    children: [
	      {
	        label: 'child 1',
	        children: [
	          {
	            label: 'child 1-1',
	            size: 10
	          },
	          {
	            label: 'child 1-2',
	            children: [
	              {
	                label: 'child 1-2-1',
	                size: 5
	              },
	              {
	                label: 'child 1-3-1',
	                size: 8
	              }
	            ]
	          },
	          {
	            label: 'child 1-3',
	            // selected: true,
	            children: [
	              {
	                label: 'child 1-3-1',
	                children: [
	                  {
	                    label: 'child 1-3-1-1',
	                    size: 2
	                  },
	                  {
	                    label: 'child 1-3-1-2',
	                    size: 16
	                  }
	                ]
	              },
	              {
	                label: 'child 1-3-2',
	                size: 8
	              }
	            ]
	          }
	        ]
	      },
	      {
	        label: 'child 2',
	        size: 25
	      }
	    ]
	  });


function update () {
  sunburst.chartFrame().breadcrumbsEnabled(document.body.clientWidth > 500);
	chart.call(sunburst);
}

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;
      update();

    },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
