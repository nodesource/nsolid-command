# N|Solid Custom Command

Implement a [N|Solid custom command][], for more information please visit our [N|Solid documentation site][]

## Installation

``` bash
npm install nsolid-command
```

## Usage

_Note: For the following example make sure you run your node process with `--expose-gc`_

``` js
const nsolidCommand = require('nsolid-command')

nsolidCommand('gc', request => {
  global.gc()
  request.return({
    status: 'OK',
    type: 'gc'
  })
})

// or

nsolidCommand({
  name: 'gc',
  command: request => {
    global.gc()
    request.return({
      status: 'OK',
      type: 'gc'
    })
  }
})
```

From the N|Solid CLI

``` bash
nsolid-cli custom --id <agentID> --name gc
```

## Contributing

To submit a bug report, please create an [issue at GitHub][].

If you'd like to contribute code to this project, please read the
[CONTRIBUTING.md][] document.


## Authors and Contributors

<table><tbody>
  <tr>
    <th align="left">Julián Duque</th>
    <td><a href="https://github.com/julianduque">GitHub/julianduque</a></td>
    <td><a href="https://twitter.com/julianduque">Twitter/@julian_duque</a></td>
  </tr>
</tbody></table>


## License & Copyright

**nsolid-command** is Copyright (c) 2018 NodeSource and licensed under the
MIT license. All rights not explicitly granted in the MIT license are reserved.
See the included [LICENSE.md][] file for more details.

[N|Solid documentation site]: https://docs.nodesource.com
[N|Solid custom command]: https://docs.nodesource.com/docs/custom-commands
[issue at GitHub]: https://github.com/nodesource/nsolid-command/issues
[CONTRIBUTING.md]: CONTRIBUTING.md
[LICENSE.md]: LICENSE.md
