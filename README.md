## IconBadge

The icon badge creates a circle with an icon or character within it and then places a badge in the upper right corner with the content provided.

## Features

A quick widget to provide an icon with a badge containing the provided content.

## Usage

To use the IconBadge widget, add the widget to your application, choose whether to have it use an icon or character, provide the necessary icon or character, and provide the necessary badge content which can be an Integer, Long, or String.

To override the styles for the icon badge look to override the following:

- Add a custom class to the widget and use that to help override the styles
- Override the sr-icon-badge-content background-color, border, and color to be the styles that you would like.
- Override the sr-icon-badge-badge border and color to be the desired styles.

### Example of style overriding background-color, border, and font color

```
.custom-icon-badge-style-1 {

    .sr-icon-badge-content {
        background-color: $default-primary !important;
        border: 1px solid $default-primary !important;
        color: $white;

        .sr-icon-badge-badge {
            border: 1px solid $default-primary !important;
            color: $default-primary;
        }
    }
}
```

### Example of style overriding to use an icon that already has a circle around it

- Here we override the border and padding to be none and 0 for the sr-icon-badge-content and then adjust the font-size and color of the icon

```
.custom-icon-badge-style-2 {

    .sr-icon-badge-content {
        border: none !important;
        padding-top: 0 !important;

        .fas {
            font-size: 2em;
            color: $default-primary;
        }
    }
}
```

## Demo project

N/A

## Issues, suggestions and feature requests

For issues, suggestions, or feature requests please let the QVine product development team know.

## Development and contribution

Development is provided by the QVine product development team.
