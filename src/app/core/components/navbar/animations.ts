import {
    animate,
    query,
    sequence,
    stagger,
    style,
    transition,
    trigger
  } from "@angular/animations";
  
  export const DropDownAnimation = trigger("dropDownMenu", [
    transition(":enter", [
      style({ height: 0, overflow: "hidden" }),
      query(".menu-item", [
      ]),
      sequence([
        animate("300ms", style({ height: "*" })),
        query(".menu-item", [
          stagger(-50, [
            animate("300ms ease", style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ]),
  
    transition(":leave", [
      style({ height: "*", overflow: "hidden" }),
      query(".menu-item", [style({ opacity: 1, transform: "none" })]),
      sequence([
        query(".menu-item", [
          stagger(50, [
            animate(
              "200ms ease",
            )
          ])
        ]),
        animate("200ms", style({ height: 0 }))
      ])
    ])
  ]);
  