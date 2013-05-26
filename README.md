floatbox.js
===========

floatbox.js is jQuery plugin solution about float div problem.

Demo: http://php.hanul.co/floatbox.js

Install
-------
1. Use jQuery.
```
<script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>
```
* and floatbox.js. (jquery.floatbox.js or jquery.floatbox.min.js)
```
<script src="jquery.floatbox.min.js" type="text/javascript"></script>
```

Usage
-----
1. ```<div class="floatbox">``` or ```$('QUERY').floatbox();```
* If when dynamic append, use ```$('QUERY').floatbox();```

Demo Source
-----------
This is demo(http://php.hanul.co/floatbox.js)'s source code.
``` html
<!DOCTYPE HTML>
<html>
  <head>
		<meta charset="utf-8">
		<script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>
		<script src="jquery.floatbox.min.js" type="text/javascript"></script>
		<title>floatbox.js</title>
		<style>
			.float-left {
				color: white;
				padding: 10px;
				float: left;
				background-color: red;
			}
			.float-right {
				color: white;
				padding: 10px;
				float: right;
				background-color: blue;
			}
			.normal {
				color: white;
				padding: 10px;
				background-color: green;
			}
		</style>
	</head>

	<body>
		<h3>Float Div 문제</h3>
		<div>
			<div class="float-left">
				Left
			</div>
			<div class="float-left">
				Left
			</div>
			<div class="float-left">
				Left
			</div>
			<div class="float-right">
				Right
			</div>
			<div class="float-right">
				Right
			</div>
			<div class="float-right">
				Right
			</div>
		</div>
		<div class="normal">
			Normal
		</div>

		<h3>문제가 해결되었으나, 동적으로 Float Div가 추가되면 문제</h3>
		<p>
			&lt;div class="floatbox"&gt; or $('QUERY').floatbox();
		</p>
		<div class="floatbox">
			<div class="float-left">
				Left
			</div>
			<div class="float-left">
				Left
			</div>
			<div class="float-left">
				Left
			</div>
			<div class="float-right">
				Right
			</div>
			<div class="float-right">
				Right
			</div>
			<div class="float-right">
				Right
			</div>
		</div>
		<div class="normal">
			Normal
		</div>

		<h3>동적으로 Float Div가 추가되어도 문제 없음</h3>
		<p>
			&lt;div class="floatbox"&gt; or $('QUERY').floatbox();<br>
			동적으로 추가될 때 마다 $('QUERY').floatbox();
		</p>
		<div class="floatbox">
			<div class="float-left">
				Left
			</div>
			<div class="float-left">
				Left
			</div>
			<div class="float-left">
				Left
			</div>
			<div class="float-right">
				Right
			</div>
			<div class="float-right">
				Right
			</div>
			<div class="float-right">
				Right
			</div>
		</div>
		<div class="normal">
			Normal
		</div>

		<script type="text/javascript">
			setInterval(function() {
				$('.floatbox').append('<div class="float-left">Left</div>');
				$('.floatbox').append('<div class="float-right">Right</div>');
				$('.floatbox:last').floatbox();
			}, 1000);
		</script>
	</body>
</html>
```

License
-------
- MPL (http://www.mozilla.org/MPL)
