package modules.todo.domain;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;
import org.skyve.CORE;
import org.skyve.domain.messages.DomainException;
import org.skyve.impl.domain.AbstractPersistentBean;

/**
 * ToDo
 * 
 * @stereotype "persistent"
 */
@XmlType
@XmlRootElement
public class ToDo extends AbstractPersistentBean {
	/**
	 * For Serialization
	 * @hidden
	 */
	private static final long serialVersionUID = 1L;

	/** @hidden */
	public static final String MODULE_NAME = "todo";
	/** @hidden */
	public static final String DOCUMENT_NAME = "ToDo";

	/** @hidden */
	public static final String descriptionPropertyName = "description";
	/** @hidden */
	public static final String completePropertyName = "complete";

	/**
	 * Description
	 **/
	private String description;
	/**
	 * Complete
	 **/
	private Boolean complete = new Boolean(false);

	@Override
	@XmlTransient
	public String getBizModule() {
		return ToDo.MODULE_NAME;
	}

	@Override
	@XmlTransient
	public String getBizDocument() {
		return ToDo.DOCUMENT_NAME;
	}

	public static ToDo newInstance() {
		try {
			return CORE.getUser().getCustomer().getModule(MODULE_NAME).getDocument(CORE.getUser().getCustomer(), DOCUMENT_NAME).newInstance(CORE.getUser());
		}
		catch (RuntimeException e) {
			throw e;
		}
		catch (Exception e) {
			throw new DomainException(e);
		}
	}

	@Override
	@XmlTransient
	public String getBizKey() {
		try {
			return org.skyve.util.Binder.formatMessage("{description}", this);
		}
		catch (@SuppressWarnings("unused") Exception e) {
			return "Unknown";
		}
	}

	@Override
	public boolean equals(Object o) {
		return ((o instanceof ToDo) && 
					this.getBizId().equals(((ToDo) o).getBizId()));
	}

	/**
	 * {@link #description} accessor.
	 * @return	The value.
	 **/
	public String getDescription() {
		return description;
	}

	/**
	 * {@link #description} mutator.
	 * @param description	The new value.
	 **/
	@XmlElement
	public void setDescription(String description) {
		preset(descriptionPropertyName, description);
		this.description = description;
	}

	/**
	 * {@link #complete} accessor.
	 * @return	The value.
	 **/
	public Boolean getComplete() {
		return complete;
	}

	/**
	 * {@link #complete} mutator.
	 * @param complete	The new value.
	 **/
	@XmlElement
	public void setComplete(Boolean complete) {
		preset(completePropertyName, complete);
		this.complete = complete;
	}
}
