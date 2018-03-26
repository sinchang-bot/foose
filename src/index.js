import 'spectre.css'
import './node_modules/spectre.css/docs/dist/spectre-exp.css'
import './node_modules/spectre.css/docs/dist/spectre-icons.css'

import FoButton, { Button, ButtonGroup } from '@/button'
import FoLabel, { Label } from '@/label'
import FoIcon, { Icon } from '@/icon'
import FoTable, { Table, TableColumn } from '@/table'
import FoInput, { Input } from '@/input'
import FoTextarea, { Textarea } from '@/textarea'
import FoRadio, { Radio } from '@/radio'
import FoSelect, { Select } from '@/select'

export default {
  version: '0.0.1',
  Button,
  ButtonGroup,
  Label,
  Icon,
  Table,
  TableColumn,
  Input,
  Textarea,
  Radio,
  Select,
  install(Vue) {
    Vue.use(FoButton)
    Vue.use(FoLabel)
    Vue.use(FoIcon)
    Vue.use(FoTable)
    Vue.use(FoInput)
    Vue.use(FoTextarea)
    Vue.use(FoRadio)
    Vue.use(FoSelect)
  }
}

export { 
  Button, 
  ButtonGroup, 
  Label, 
  Icon, 
  Table, 
  TableColumn, 
  Input, 
  Textarea,
  Radio,
  Select
}
