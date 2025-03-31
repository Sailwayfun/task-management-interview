## Question 1

Explain why does this color not works, and how to fix make it work on 1st list

### Answer

`.container .shop-list li.item` this selector has higher specificity (權重) than `.container .shop-list .item`, so even though it comes above the latter one, it still overrides the blue color, thus all list items are with green text color. Change from

```
.container shop-list .item {
  color: blue;
}
```

to

```.container ol.shop-list .item {
  color: blue;
}
```

would change the text color of the first list to blue because we give shop list one more specifier "ol", so it has higher specificity.

## Question 2

Write styling make every other line give background color to next one

### Answer

.container .shop-list .item:nth-child(odd) {
background-color: aquamarine;
}

.container .shop-list .item:nth-child(even) {
background-color: goldenrod;
}

I don't exactly understand what "every other line give background color to next one", but from what i guess it means "stripes", like what you see on zebra, two colors interwines with each other.
