# Infopanel

WebProject for infopanels

## Run & Build

### For develop

    npm run dev

### For production

    npm run build

    npm run start

## Page types

### There are more page types

1. Text Page:

    Just page with some images or something.

    Example of json:

        {
            type: "text_page",
            content: 
            [
                {
                    type: "text_block",
                    content: "hello, my name is ardonplay!"
                },

                {
                    type: "image",
                    content: "/content/cringe.png"
                },
                {
                    type: "text_block",
                    content: [
                        {   type: "text"
                            content: "hello my name is cringe!"
                        },
                        {
                            type: "image",
                            content: "/content/cringe.png"
                        }
                    ]
                }
            ]
        }
