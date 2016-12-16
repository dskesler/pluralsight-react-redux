import * as React from "react";
import * as ReactDOM from "react-dom";

interface MessengerProps extends React.HTMLProps<any>{
      name: string;
}

class Messenger extends React.Component<MessengerProps, {}> {

 render () {
  return (
          <div>
            "Hello from the Messenger class, " + {this.props.name}
          </div>
        );
    }
}

export { Messenger }
