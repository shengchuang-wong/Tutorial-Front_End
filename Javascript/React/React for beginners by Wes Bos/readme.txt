1. Fragment
===========
import React, { Fragment } from 'react';

<Fragment>

</Fragment

or event latest supports

<>

</>

2. Ref
======
username = React.createRef();

const user = {
  username: this.username.value.value
}

<input ref="username" type="text />

3. Form easy reset
==================
On the submit event of the form/button

event.currentTarget.reset();

4. Form easy get name
=====================
function xxx(event) {
  name = event.currentTarget.name;
}

<input name="username" type="text" />