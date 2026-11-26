package locales

import (
 "github.com/mayswind/ezbookkeeping/pkg/core"
)

var fa = &LocaleTextItems{
 DefaultTypes: &DefaultTypes{
  DecimalSeparator:    core.DECIMAL_SEPARATOR_DOT,
  DigitGroupingSymbol: core.DIGIT_GROUPING_SYMBOL_COMMA,
 },
}
